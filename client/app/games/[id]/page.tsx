"use client";
import React, { useContext, useEffect, useState } from "react";

import GameCard from "@/app/components/GameCard";
import { GameContext, Game, GameProvider } from "@/app/context/GameContext";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams(); // Fetching the game ID from the URL
  const { games } = useContext(GameContext); // Using context to get games
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    console.log(id);
    // Find the game with the matching Firestore document ID
    const foundGame = games.find((game) => game.id === id);
    if (foundGame) {
      setGame(foundGame);
    }
  }, [id, games]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <GameProvider>
      <GameCard game={game} />
    </GameProvider>
  );
};

export default page;
