"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

export interface Game {
  id: string;
  name: string;
  players: [];
}

export const GameContext = createContext<{
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
}>({
  games: [],
  setGames: () => {},
});

export const GameProvider = ({ children }: any) => {
  const ref = collection(db, "games");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const snapshots = await getDocs(ref);

      const data: Game[] = [];
      snapshots.forEach((doc) => {
        const { id: docId, ...otherData } = doc.data() as Game;

        data.push({ id: doc.id, ...otherData });
      });

      setGames(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  return <GameContext.Provider value={{ games, setGames }}>{children}</GameContext.Provider>;
};

export const useGames = () => useContext(GameContext);
