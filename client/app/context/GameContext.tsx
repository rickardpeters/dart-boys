"use client";
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

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

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const ref = collection(db, "games");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const snapshot = await getDocs(ref);
        const gamesArray: Game[] = snapshot.docs.map((doc) => {
          const { id: docId, ...otherData } = doc.data() as Game;
          return { id: doc.id, ...otherData };
        });
        setGames(gamesArray);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchGames();
  });

  return <GameContext.Provider value={{ games, setGames }}>{children}</GameContext.Provider>;
};

export const useGames = () => useContext(GameContext);
