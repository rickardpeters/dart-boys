"use client";
import React, { useContext, useEffect, useState } from "react";

import { GameContext, Game } from "@/app/context/GameContext";
import { useParams } from "next/navigation";
import GamePage from "@/app/components/GamePage";

const page = () => {
  const { id } = useParams(); // Fetching the game ID from the URL
  const { games } = useContext(GameContext); // Using context to get games
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const foundGame = games.find((game) => game.id === id);
    if (foundGame) {
      setGame(foundGame);
    }
  }, [id, games]);

  if (!game) {
    return <div className="grid place-items-center h-[70vh] text-3xl animate-pulse">Loading...</div>;
  }

  return (
    <div>
      <GamePage game={game} />
    </div>
  );
};

export default page;
