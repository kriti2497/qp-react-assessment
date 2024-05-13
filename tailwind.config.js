/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        todoVeryDarkBlue: "hsl(235, 21%, 11%)",
        todoVeryDesaturatedBlue: "hsl(235, 24%, 19%)",
        todoLightGrayishBlue: "hsl(234, 39%, 85%)",
        todoLightGrayBlueHover: "hsl(236, 33%, 92%)",
        todoDarkGrayishBlue: "hsl(234, 11%, 52%)",
        todoVeryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
        todoVeryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
