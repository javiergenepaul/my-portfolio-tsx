/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    darkMode: 'class',
    colors:{
      "primary": "#5047EB",
      "white": "#FFFFFF",
      "background": {
        "dark": "#08080C",
        "light": "#F7F7F8"
      },
    },
    fontFamily: {
      chakra : ['Chakra Petch', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
