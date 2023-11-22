"use client";
import React from "react";
import { authCheck } from "../AuthCheck";

const page = () => {
  return <div>UserPage</div>;
};

export default authCheck(page);
