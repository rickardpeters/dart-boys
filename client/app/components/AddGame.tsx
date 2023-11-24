"use client";
import React, { useState } from "react";
import { useGames } from "../context/GameContext";

const AddGame = () => {
  const [name, setName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const { addGame } = useGames();

  const addNewGame = () => {
    addGame(name, player1, player2);

    setName("");
    setPlayer1("");
    setPlayer2("");
  };

  return (
    <div>
      <div className="grid place-content-center m-12">
        <h1 className="w-full text-center text-3xl my-4 justify-center font-agbalumo">Start a new game:</h1>

        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Game name"
          className="input input-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer1(e.target.value)}
          value={player1}
          type="text"
          placeholder="Player 1"
          className="input input-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer2(e.target.value)}
          value={player2}
          type="text"
          placeholder="Player 2"
          className="input input-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral"
        />
        <button onClick={() => addNewGame()} className="btn btn-primary m-2 justify-center rounded-md w-full">
          Create game
        </button>
      </div>
    </div>
  );
};

export default AddGame;
