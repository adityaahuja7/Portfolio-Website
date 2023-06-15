/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        blobLight: "url(../SVGs/blob-light.svg)",
        blobDark: "url(../SVGs/blob-dark.svg)",
        wavesLightCard :"url(../SVGs/waves-light-card.svg)", 
      },
      colors: {
        primary: "#98A8F8",
        darkModeprimary: "#06283D",
        antiquewhite:"rgb(255, 228, 193)",
      },
      aspectRatio:{
        "7/10": "7 / 10",
      },
    },
  },
  plugins: [],
};
