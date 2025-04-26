/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/***/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        main: "#4e04fb",
        secondary: "#1b1a41",
      },
    },
  },
  plugins: [],
};
