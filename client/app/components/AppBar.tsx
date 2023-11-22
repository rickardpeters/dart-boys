"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const AppBar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex gap-4 p-4 bg-neutral shadow-md font-titilliumWeb">
      <Link href="/" replace>
        <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out text-">Home</button>
      </Link>

      {user ? (
        <>
          <Link href="/games/newgame" replace>
            <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">New game</button>
          </Link>
          <Link href="/games" replace>
            <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">Your games</button>
          </Link>
          <Link href="/highscore" replace>
            <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">High Score</button>
          </Link>

          <button onClick={logout} className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">
            Log out
          </button>
        </>
      ) : (
        <></>
      )}
    </header>
  );
};

export default AppBar;
