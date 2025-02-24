import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}"],
  darkMode: "[data-theme='dark']",
  theme: {
    extend: {
      colors: {
        grayish: "#7b7b7b",
        yellowy: "#ffbc11",
        bluey: "#3f75ff",
        purpley: "#cb3eff",
      },
    },
  },
  plugins: [
    createThemes(
      {
        light: {
          text: "#000000",
          "dash-fore": "#ffffff",
          "dash-back": "#f3f3f3",
        },
        dark: {
          text: "#ffffff",
          "dash-fore": "#1d1d29",
          "dash-back": "#11121e",
        },
      },
      {
        defaultTheme: {
          light: "light",
          dark: "dark",
        },
      }
    ),
  ],
};
