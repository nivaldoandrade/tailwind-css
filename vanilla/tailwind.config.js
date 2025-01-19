/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
	darkMode: "class",
  theme: {
    extend: {
      colors: {
        nasa: {
          red: {
            DEFAULT: "#8E1616",
            primary: "#D84040",
            secondary: "#1D1616"
          },
          black: {
            DEFAULT: "#000000",
            primary: "#8d9797",
            secondary: "#4e545c"
          }
        }
      }
    }
  }
}