/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: '#27bba4',
        lightBlue: '#6174ff',
        darkGrayishBlue: '#4c545d',
        grayishBlue: '#a0abb2',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif']
      }
    },
  },
  plugins: [],
}
