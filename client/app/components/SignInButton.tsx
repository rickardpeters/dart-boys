"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={session.user.image} />
          </div>
        </div>
        <p className="text-accent m-auto">{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="btn btn-ghost rounded-md hover:scale-110 transition-all ease-in-out">
      Sign In
    </button>
  );
};

export default SignInButton;
