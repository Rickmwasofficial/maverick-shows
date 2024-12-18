/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'caveat': ['Caveat', 'sans-serif'],
        'rubik': ['Rubik Moonrocks', 'sans-serif']
      },
      colors: {
        'red-theme': {
          DEFAULT: '#FF2C1F',
        }
      }
    },
  },
  plugins: [],
}