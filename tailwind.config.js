/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montser" : ["Montserrat Alternates", "sans-serif"]
      },
      colors: {
        card: "#1e1e1e",
        cardBorder: "#676767",
      },
      screens: {
        mwidth: '400px'
      }
    },
  },
  plugins: [],
}

