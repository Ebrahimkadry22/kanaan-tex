import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#B2D234",
        "primary-hover": "#9EC02C",
        "primary-light": "#D9EC8A",

        dark: "#0F1115",
        surface: "#1A1F24",

        grayText: "#B0B7C3",
      },

      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};

export default config;