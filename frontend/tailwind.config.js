/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      primary: "#0B1017",
      secondary: "#21262E",
      danger: "#e3342f",
      text: "#000000",
      orange: "#FE914C",
      secondaryOrange: "#FFCFB1",
    }),
  },
  plugins: [],
};
