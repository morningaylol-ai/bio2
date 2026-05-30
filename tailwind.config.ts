import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: {
          50: "#fff8dd",
          100: "#fff1b8",
          200: "#f8d96a",
          300: "#e6be48",
          400: "#d4af37",
          500: "#b78b19",
          600: "#8c6b1f",
          700: "#5a4a18",
          800: "#2a1f08",
          900: "#120d03",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(212,175,55,0.22)",
        hard: "0 24px 80px rgba(0,0,0,0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        drift: {
          "0%": { transform: "translate3d(-2%,0,0)" },
          "50%": { transform: "translate3d(2%,1%,0)" },
          "100%": { transform: "translate3d(-2%,0,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "120% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        pulseGlow: "pulseGlow 3.4s ease-in-out infinite",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
