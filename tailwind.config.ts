import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xl: "1200px",
    },
    gridTemplateRows: {
      0: "0fr",
      1: "1fr",
    },
    borderRadius: {
      4: "16px",
      7: "28px",
      8: "32px",
      full: "9999px",
    },
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      dark: {
        DEFAULT: "#232323",
      },
      red: {
        DEFAULT: "#D9251C",
        hover: "#AB160F",
      },
      bg: {
        DEFAULT: "#FAF9F9",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    boxShadow: {
      deliveryCard: "4px 4px 15px 0px #00000026",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
