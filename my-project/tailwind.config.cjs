/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Sarabun: ['Sarabun'],
      Lobster: ['Lobster'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
