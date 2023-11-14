import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import AppBar from "./components/AppBar";
import { GameProvider } from "./context/GameContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bra Surr - Dart",
  description: "Pilar och kämparglöd",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="aqua">
      <body className={inter.className}>
        <GameProvider>
          <Providers>
            <AppBar />
            {children}
          </Providers>
        </GameProvider>
      </body>
    </html>
  );
}
