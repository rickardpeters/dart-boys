"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

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
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const gamesArray: Game[] = snapshot.docs.map((doc) => {
          const { id: docId, ...otherData } = doc.data() as Game;
          return { id: doc.id, ...otherData };
        });

        setGames(gamesArray);
      },
      (error) => {
        console.error("Error listening to documents:", error);
      }
    );
    return () => unsubscribe();
  });

  return <GameContext.Provider value={{ games, setGames }}>{children}</GameContext.Provider>;
};

export const useGames = () => useContext(GameContext);
