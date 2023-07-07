/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        backgroundLight: "url(../SVGs/blob-light.svg)",
        backgroundDark: "url(../SVGs/blob-dark.svg)", 
      },
      colors: {
        primary1 : "#2D2727",
        primary2 : "#413543",
        accent1: "#8F43EE",
        accent2 : "#F0EB8D"
      },
      aspectRatio:{
        "7/10": "7 / 10",
      },
    },
  },
  plugins: [],
};
