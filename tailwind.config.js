/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')  // to use colours not standard

module.exports = {
  purge: ['./**/*.html', './src/**/*.js'],        //for production - look for any html files and only js files within src folder
  content: [],
  theme: {
    extend: {
      teal: colors.teal,
    },
  },
  plugins: [],
}
