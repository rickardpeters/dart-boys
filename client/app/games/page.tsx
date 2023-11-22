"use client";
import React from "react";
import { GameProvider } from "../context/GameContext";
import GameList from "../components/GameList";
import { authCheck } from "../AuthCheck";

const page = () => {
  return (
    <>
      <GameProvider>
        <GameList />
      </GameProvider>
    </>
  );
};

export default authCheck(page);
