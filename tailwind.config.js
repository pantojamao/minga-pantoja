/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-home':'url(../../src/assets/images/imgHomeMovile.png'
      }
    },
  },
  plugins: [],
}