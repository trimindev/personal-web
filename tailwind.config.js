// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
      boxShadow: {
        full: "0 0 0 1px #ffffff26;",
      },
      colors: {
        darkwhite: {
          9: "#efefef",
          8: "#d4d4d4",
        },
        darkgray: {
          12: "#575757",
          11: "#404040",
          10: "#242424",
          9: "#191919",
          8: "#090909",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
