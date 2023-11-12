"use client";
import React from "react";
import { GameProvider } from "../context/GameContext";
import GameList from "../components/GameList";

const page = () => {
  return (
    <>
      <GameProvider>
        <GameList />
      </GameProvider>
    </>
  );
};

export default page;
