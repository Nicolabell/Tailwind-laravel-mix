/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors"); // to use colours not standard
//for production - look for any html files and only js files within src folder
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.js"],
  content: [],
  theme: {
    extend: {
      teal: colors.teal,
    },
  },
  plugins: [],
};
