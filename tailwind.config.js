const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFE81F"
        }
      },
      fontFamily: {
        'sans': ['Days One', 'Sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}