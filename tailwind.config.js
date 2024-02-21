/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'navBar':'#506078'
      }
    },
    fontFamily:{
      logo:['Rubik Doodle Shadow'],
    }
    
  },
  plugins: [],
}

