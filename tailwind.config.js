/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0.0deg)' },
          '25%': { transform: 'rotate(90.0deg)' },
          '50%': { transform: 'rotate(180.0deg)' },
          '75%': { transform: 'rotate(260.0deg)' },
          '100%': { transform: 'rotate(360.0deg)' },
        },
        topBottom: {
          '0%': { top: "50%" },
          '25%': { top: "60%" },
          '50%': { bottom: "50%" },
          '75%': { top: "40%" },
          '100%': { top: "50%" },
        },
      },
      animation: {
        'rotate-sun': 'rotate 6s linear infinite',
        'plane': 'topBottom 6s linear infinite',
      },
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

