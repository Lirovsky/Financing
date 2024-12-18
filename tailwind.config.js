/** @type {import('tailwindcss').Config} */

import Blob from "./src/img/blob.svg";
import Header from "./src/img/header2.jpg";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: `url(${Blob})`,
        filter: `linear-gradient(rgba(48, 110, 232, .8), rgba(48, 110, 232, .9)), url(${Header})`,
      },
    },
  },
  plugins: [],
};
