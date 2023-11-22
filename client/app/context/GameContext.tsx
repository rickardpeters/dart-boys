"use client";
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Unsubscribe, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export interface Game {
  id: string;
  name: string;
  players: [];
}

export const GameContext = createContext<{
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  fetch: boolean;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  games: [],
  setGames: () => {},
  fetch: false,
  setFetch: () => {},
});

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const ref = collection(db, "games");
  const [games, setGames] = useState<Game[]>([]);

  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const gamesArray: Game[] = snapshot.docs.map((doc) => {
          const gameData = doc.data() as Game;
          console.log("fetching games...");
          return {
            _id: doc.id,
            get id() {
              return this._id;
            },
            set id(value) {
              this._id = value;
            },
            ...gameData,
          };
        });
        setGames(gamesArray);
      },
      (error) => {
        console.error("Error fetching documents:", error);
      }
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [fetch]);

  return <GameContext.Provider value={{ games, setGames, fetch, setFetch }}>{children}</GameContext.Provider>;
};

export const useGames = () => useContext(GameContext);
