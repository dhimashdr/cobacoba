/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        moving: 'moving 5s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        moving: {
          '25%': {transform: 'translateX(4px)'},
          '75%': {transform: 'translateX(-6px)'}
        }
      }
    },
  },
  plugins: [],
}

