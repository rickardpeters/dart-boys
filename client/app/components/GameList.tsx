"use client";
import React, { useContext } from "react";
import GameCard from "./GameCard";
import { GameContext } from "../context/GameContext";
import { useRouter } from "next/navigation";

const GameList = () => {
  const { games } = useContext(GameContext);
  const router = useRouter();

  const handleClick = (game: any) => {
    router.push(`/games/${game.id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grplace-items-center w-screen">
        {games &&
          games.map((game) => (
            <div
              onClick={() => handleClick(game)}
              key={game.id}
              className="hover:scale-105 hover:cursor-pointer m-4 transition-all ease-in-out">
              <GameCard game={game} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameList;
