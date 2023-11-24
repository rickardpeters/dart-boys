"use client";
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Unsubscribe, addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

export interface Game {
  id: string;
  name: string;
  players: [];
}

export const GameContext = createContext<{
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  addGame: (name: string, player1: string, player2: string) => Promise<void>;
}>({
  games: [],
  setGames: () => {},
  addGame: async () => {},
});

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const ref = collection(db, "games");
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async () => {
    const querySnapshot = await getDocs(ref);
    console.log("fetching games...");
    const gamesArray: Game[] = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Game)
    );

    setGames(gamesArray);
    localStorage.setItem("games", JSON.stringify(gamesArray)); // Cache the games
  };

  const addGame = async (name: string, player1: string, player2: string) => {
    const newGame = {
      name,
      players: [
        { playerId: player1, score: 0 },
        { playerId: player2, score: 0 },
      ],
      createdBy: auth.currentUser?.uid,
    };

    await addDoc(collection(db, "games"), newGame);
    fetchGames();
  };

  useEffect(() => {
    const cachedGames = localStorage.getItem("games");
    if (cachedGames) {
      setGames(JSON.parse(cachedGames));
    } else {
      fetchGames();
    }
  }, []);

  return <GameContext.Provider value={{ games, setGames, addGame }}>{children}</GameContext.Provider>;
};

export const useGames = () => useContext(GameContext);
