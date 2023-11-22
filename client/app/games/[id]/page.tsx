"use client";
import React, { useContext, useEffect, useState } from "react";

import { GameContext, Game } from "@/app/context/GameContext";
import { useParams } from "next/navigation";
import GamePage from "@/app/components/GamePage";
import Loading from "@/app/components/Loading";
import { authCheck } from "@/app/AuthCheck";

const Page = () => {
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
    return <Loading />;
  }

  return (
    <div>
      <GamePage game={game} />
    </div>
  );
};

export default authCheck(Page);
