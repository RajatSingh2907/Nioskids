import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EC",
        sky: "#5CC8FF",
        sun: "#FFD93D",
        coral: "#FF6B6B",
        mint: "#7ED957",
        grape: "#9B5DE5",
        orange: "#FFB703",
        ink: "#31405F"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        float: "0 18px 45px rgba(49, 64, 95, 0.14)",
        glow: "0 18px 36px rgba(255, 183, 3, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
