/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-button-dark": "#D5D5D5",
        "text-light": "#F8F6F5",
        "button-dark": "#2D2D2D",
        "button-light": "#F6F6F6",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
