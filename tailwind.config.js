/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D1572",
        primary_light: "#901ACA",
        hovered: "#f8de09 "
      },
      keyframes: {
        "shiny-btn": {
          '0%': { transform: 'scale(0) rotate(-45deg)', opacity: 0 },
          '80%': { transform: 'scale(0) rotate(-45deg)', opacity: 0.5 },
          '81%': { transform: 'scale(4) rotate(-45deg)', opacity: 1 },
          '100%': { transform: 'scale(90) rotate(-45deg)', opacity: 0 }
        },
        "slider": {
          '0%': { transform: 'translateX(-1789)' },
          '15%': { transform: 'translateX(-2236)' },
          '30%': { transform: 'translateX(-2683)' },
          '45%': { transform: 'translateX(-3131)' },
          '60%': { transform: 'translateX(-3578)' },
          '75%': { transform: 'translateX(-4025)' },
          '90%': { transform: 'translateX(-4472)' },
          '100%': { transform: 'translateX(-1789)' }
        },
        "refer-slider": {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'shiny-btn': 'shiny-btn 2s ease-in-out infinite',
        'slide': 'slider 2s ease 0s forwards',
        'referslide': 'refer-slider 25s linear infinite'
      },
      boxShadow: {
        custom: '20px 0px 25px 0px #41006d',
        button:'0px 6px 16px -5px'
      }
    },
  },
  plugins: [],
}

