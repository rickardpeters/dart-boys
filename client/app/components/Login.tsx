"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      // Redirect or handle successful login
    } catch (error) {
      setError("Failed to log in. " + error);
    }
  };

  return (
    <div className="grid place-items-center h-80 m-12">
      <h1 className="w-full text-center text-3xl my-4 justify-center font-agbalumo">Log in</h1>
      {error && <p className="text-error">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full h-64 grid place-content-center">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your e-mail"
          required
          className="input input-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password..."
          required
          className="input input-ghost focus:non w-full max-w-xs m-2 rounded-none border-b-2 border-neutral border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-neutral"
        />
        <button type="submit" className="btn btn-primary m-2 justify-center rounded-md w-full text-primary-content">
          Login
        </button>
        <p className="text-sm w-full text-center m-2">
          Not a member?{" "}
          <Link href="/signup" className="underline text-accent" replace>
            {`Click here`}
          </Link>{" "}
          to create an account!
        </p>
      </form>
    </div>
  );
};

export default Login;
