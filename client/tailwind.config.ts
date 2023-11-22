import type { Config } from "tailwindcss";
import pil from "./public/pil.jpg";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        agbalumo: ["Agbalumo", "sans-erif"],
        titilliumWeb: ["Titillium Web", "sans-serif"],
        indieFlower: ["Indie Flower", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "aqua"],
  },
};
export default config;
