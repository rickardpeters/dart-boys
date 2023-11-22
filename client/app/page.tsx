"use client";
import Login from "./components/Login";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <div className="grid place-items-center m-12 text-7xl font-agbalumo bg-cover bg-center">
        <a>Nu kastar vi lite pil</a>
        <div className="my-12">{user ? <a className="text-accent">Hello, {user.email}!</a> : <Login />}</div>
      </div>
    </>
  );
}
