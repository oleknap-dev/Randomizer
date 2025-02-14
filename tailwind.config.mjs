import { transform } from "next/dist/build/swc/generated-native";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flipCoin: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(1440deg)" },
        },
      },
      animation: {
        flipCoin: "flipCoin 3s linear forwards",
      },
    },
  },
  plugins: [],
};
