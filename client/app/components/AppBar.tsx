import React from "react";
import SignInButton from "./SignInButton";
import Link from "next/link";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-neutral shadow-md font-titilliumWeb">
      <Link href="/" replace>
        <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out text-">Home</button>
      </Link>
      <Link href="/games/newgame" replace>
        <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">New game</button>
      </Link>
      <Link href="/games" replace>
        <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">Your games</button>
      </Link>
      <Link href="/highscore" replace>
        <button className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">High Score</button>
      </Link>
      <SignInButton />
    </header>
  );
};

export default AppBar;
