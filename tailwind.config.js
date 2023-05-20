/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#D5DDE6',
      'pink': '#E1C1CD',
      'dark-pink': '#f58cb3',
      'cream': '#EBDED5',
      'text': '#777777',
      'grey': '#575A5A',
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent',
    },
    fontFamily: {
      'playfair':'playfair-display',
      'poppins':'poppins'
    }
  },
  plugins: [],
}

