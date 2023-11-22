"use client";
import { authCheck } from "@/app/AuthCheck";
import AddGame from "@/app/components/AddGame";

const page = () => {
  return <AddGame />;
};

export default authCheck(page);
