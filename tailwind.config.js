/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
  ],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
