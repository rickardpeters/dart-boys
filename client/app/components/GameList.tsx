"use client";
import React, { useContext } from "react";
import GameCard from "./GameCard";
import { GameContext } from "../context/GameContext";

const GameList = () => {
  const { games } = useContext(GameContext);

  if (!games) {
    return <div className="grid place-items-center h-[70vh] text-3xl font-agbalumo animate-pulse">Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grplace-items-center w-screen">
        {games && games.map((game) => <GameCard game={game} key={game.id} />)}
      </div>
    </div>
  );
};

export default GameList;
