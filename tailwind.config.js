/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        kota: "Kotta One",
        david: "David Libre"
      }
    },
  },
  plugins: [],
}
