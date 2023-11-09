/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#F6F6F6',
          300: '#F2F2F2',
          400: '#858585',
          500: '#393939',
          600: '#2C2C2C',
          700: '#242424',
          800: '#1C1C1C',
          900: '#161616',
        }
      }
    },
  },
  plugins: [],
}

