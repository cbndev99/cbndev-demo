/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      screens: {
        desktop: "1920px",
        desktopxl: "3040px",
      },
    },
  },
  plugins: [],
};
