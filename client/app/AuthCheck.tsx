"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { useAuth } from "./context/AuthContext";

export const authCheck = (Component: React.ElementType) => {
  return (props: any) => {
    const router = useRouter();
    const [status, setStatus] = useState("LOADING");
    const { user } = useAuth();

    useEffect(() => {
      if (!user) {
        router.push("/login");
      } else {
        setStatus("SIGNED_IN");
      }
    }, [router]);

    if (status === "LOADING") {
      return <Loading />;
    }

    return <Component {...props} />;
  };
};
