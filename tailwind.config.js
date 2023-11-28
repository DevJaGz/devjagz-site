/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'b2xl': '1536px',
      },
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
        },
        accent: {
          50:  '#fff3ed',
          100: '#ffe3d4',
          200: '#ffc3a8',
          300: '#ff9970',
          400: '#ff6337',
          500: '#FF441B',
          600: '#f02006',
          700: '#c71307',
          800: '#9e110e',
          900: '#7f120f',
          950: '#450506',
        }
      },
      boxShadow:{
        'top-mask': '0px -10px 0px 0px rgba(0,0,0,0.5)',
      }
    },
  },
}

