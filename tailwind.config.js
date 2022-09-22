/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  container: {
    // you can configure the container to be centered
    center: true,

    // or have default horizontal padding
    padding: "1rem",

    // default breakpoints but with 40px removed
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      "2xl": "1600px",
    },
  },
  plugins: [],
};
