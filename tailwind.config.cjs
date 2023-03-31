/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('./assets/HomeGraphic.jpg')",
      },
      colors: {
        "text-button-dark": "#D5D5D5",
        "text-light": "#F8F6F5",
        dark: "#2D2D2D",
        light: "#F6F6F6",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      maxWidth: {
        "mobile-lg": "425px",
      },
    },
  },
  plugins: [],
};
