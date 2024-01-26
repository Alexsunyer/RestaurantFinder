/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      blackops: ["Black Ops One", "sans-serif"],
      staatliches: ["Staatliches", "sans-serif"],
    },
    extend: {
      rotate: {
        30: "30deg",
      },
      translate: {
        51: "-50deg",
      },
    },
  },
  plugins: [],
};
