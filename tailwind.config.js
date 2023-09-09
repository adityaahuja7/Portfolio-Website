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
<<<<<<< HEAD
          background2 : "rgb(15 23 42)",
        },
        secondary:{
          navbar1: "#FF8400",
          navbar2: "#FFD369",
          navbar3 : "#865DFF"
        }
=======
          background2 : "#393E46",
        },
        secondary:{
          navbar1: "#E3CAA5",
          navbar2: "#FFD369",
        }
      },
      aspectRatio: {
        "7/10": "7 / 10",
>>>>>>> 10f9964083fce957c7fdf4ed5c26326b786a66fc
      },
    },
  },
  plugins: [],
};
