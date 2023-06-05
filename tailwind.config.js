/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        blobLight: "url(../Components/SVGs/blob-light.svg)",
        blobDark: "url(../Components/SVGs/blob-dark.svg)",
      },
      colors: {
        primary: "#98A8F8",
        darkModeprimary: "#06283D",
        antiquewhite:"rgb(255, 228, 193)",
      },
    },
  },
  plugins: [],
};
