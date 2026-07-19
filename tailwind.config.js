/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#1F3F3A", 900: "#132824", 800: "#1F3F3A", 700: "#2A544D" },
        sand: "#FAF7F1",
        clay: "#B8863B",
        moss: "#7C9A82",
        rust: "#A5432E",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
