/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['"Montserrat"', 'sans-serif'],
      body: ['"Montserrat"', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
