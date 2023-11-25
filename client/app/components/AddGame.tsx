"use client";
import React, { useEffect, useState } from "react";
import { useGames } from "../context/GameContext";
import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface User {
  uid: string;
  name: string;
}

const AddGame = () => {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [player1Name, setPlayer1Name] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const { addGame } = useGames();

  const addNewGame = () => {
    if (player2) {
      try {
        addGame(name, player1, player2);
        setName("");
        setPlayer1("");
        setPlayer2("");
        alert("Game successfully created!");
      } catch (error) {
        console.error("Error creating game: ", error);
      }
    } else {
      alert("You must select an opponent");
    }
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const ref = collection(db, "users");
      try {
        const querySnapshot = await getDocs(ref);
        const users = querySnapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() } as User));
        setAllUsers(users);
        if (user) {
          setPlayer1(user?.uid);
        }
        const currentUser = user;
        const p1 = allUsers.find((u) => u.uid === currentUser?.uid);
        if (p1) {
          console.log("setting name");
          setPlayer1Name(p1.name);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
    };
    console.log("fetching all users...");
    getAllUsers();
  }, []);

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
          value={player1Name}
          type="text"
          placeholder="Player 1"
          className="input input-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral"
        />
        <div className="divider divider-vertical font-agbalumo">VS</div>

        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPlayer2(e.target.value)}
          value={player2}
          className="select select-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral">
          <option className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52" value="">
            Select opponent...
          </option>
          {allUsers.map((user) => (
            <option key={user.uid} value={user.uid}>
              {user.name}
            </option>
          ))}
        </select>

        <button onClick={() => addNewGame()} className="btn btn-primary m-2 justify-center rounded-md w-full">
          Create game
        </button>
      </div>
    </div>
  );
};

export default AddGame;
