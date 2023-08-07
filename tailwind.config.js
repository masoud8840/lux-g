/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundColor: {
        primary: "#0071f8",
        secondary: "rgb(238, 98, 107)",
        white: "#fafafa",
      },
      borderRadius: {
        "4xl": "28px",
      },
    },
  },
  plugins: [],
};
