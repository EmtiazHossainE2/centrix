/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        big:"2000px"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
