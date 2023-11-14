"use client";
import React, { useContext } from "react";
import GameCard from "./GameCard";
import { GameContext } from "../context/GameContext";
import { useRouter } from "next/navigation";

const GameList = () => {
  const { games } = useContext(GameContext);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grplace-items-center w-screen">
        {games && games.map((game) => <GameCard game={game} />)}
      </div>
    </div>
  );
};

export default GameList;
