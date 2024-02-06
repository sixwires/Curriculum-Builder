import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground": "rgb(255, 255, 255)",
        "background": "rgb(41, 44, 51)",
        "background-dark": "rgb(33, 35, 41)",
      }
    },
  },
  plugins: [],
};
export default config;
