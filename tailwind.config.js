/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/pages/*.html"
  ],
  theme: {
    screens: {
      sm : '576px',
      md : '768px',
      lg : '992px',
      xl : '1200px',
  },
  container : {
     center : true,
     padding : '1rem',
  },

  extend: {
    colors: {
      primary : '#DB663b',
      'custom-color' : '#fffdf9'

    },
    fontFamily: {
      'poppins' :['Poppins'],
      'roboto' :['Roboto'],
    }
  },
  },
  plugins: [],
}
