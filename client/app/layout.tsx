import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppBar from "./components/AppBar";
import { GameProvider } from "./context/GameContext";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bra Surr - Dart",
  description: "Pilar och kämparglöd",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="aqua">
      <AuthProvider>
        <body className={inter.className}>
          <GameProvider>
            <AppBar />
            {children}
          </GameProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
