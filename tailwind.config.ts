import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    fontFamily: { 
      poppins: [ 'var(--font-poppins)'],
      roboto: [ 'var(--font-roboto)'],
      comfortaa: [ 'var(--font-comfortaa)'],
    },
    extend: {
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #e0e0e0 1px, transparent 1px), 
                         linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)`,
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()]

};
export default config;
