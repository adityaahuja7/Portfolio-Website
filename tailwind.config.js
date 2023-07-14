/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        backgroundLight: "url(../SVGs/blob-light.svg)",
        backgroundDark: "url(../SVGs/blob-dark.svg)",
      },
      colors: {
        primary: {
          background1: "#FFFBE9",
          background2 : "#393E46",
        },
        secondary:{
          navbar1: "#E3CAA5",
          navbar2: "#FFD369",
        }
      },
      aspectRatio: {
        "7/10": "7 / 10",
      },
    },
  },
  plugins: [],
};
