/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        satisfy: ["Satisfy", "sans-serif"]
      },
      colors: {
        primary: '#082740',
        secondary: '#ff0143',
        secondaryText : "#4e4f51",
        thm_gray:'#eceeef'
      },
    },
  },
  plugins: [],
}

