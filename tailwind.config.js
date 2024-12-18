/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('./src/img/blob.svg')",
        filter:
          "linear-gradient(rgba(48, 110, 232, .8), rgba(48, 110, 232, .9)), url('./src/img/header2.jpg')",
      },
    },
  },
  plugins: [],
};
