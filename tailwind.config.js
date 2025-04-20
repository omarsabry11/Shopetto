/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/***/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", // Add Flowbite path
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};




