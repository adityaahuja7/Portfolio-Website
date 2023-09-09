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
          background2 : "rgb(15 23 42)",
        },
        secondary:{
          navbar1: "#FF8400",
          navbar2: "#FFD369",
          navbar3 : "#865DFF"
        }
      },
    },
  },
  plugins: [],
};
