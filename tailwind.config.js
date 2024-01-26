/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl' : '0 10px 20px rgb(0 0 0 / 0.2)'
      }
    },
  },
  plugins: [],
}