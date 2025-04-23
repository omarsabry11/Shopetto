/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/***/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("flowbite/plugin"), 
  ],
};




