"use client";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";

const AddGame = () => {
  const [name, setName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  // Example game data

  const addNewGame = () => {
    const newGame = {
      name: name,
      players: [
        { playerId: player1, score: 0 },
        { playerId: player2, score: 0 },
      ],
    };

    addDoc(collection(db, "games"), newGame)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Game created!");
        setName("");
        setPlayer1("");
        setPlayer2("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <div className="grid place-content-center m-12">
        <h1 className="w-full text-center text-2xl m-2">Start a new game:</h1>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Game name"
          className="input input-bordered input-primary w-full max-w-xs m-2 rounded-sm"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer1(e.target.value)}
          value={player1}
          type="text"
          placeholder="Player 1"
          className="input input-bordered input-primary w-full max-w-xs m-2 rounded-sm"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayer2(e.target.value)}
          value={player2}
          type="text"
          placeholder="Player 2"
          className="input input-bordered input-primary w-full max-w-xs m-2 rounded-sm"
        />
        <button onClick={() => addNewGame()} className="btn btn-primary m-2 justify-center rounded-sm w-full">
          Create game
        </button>
      </div>
    </div>
  );
};

export default AddGame;
