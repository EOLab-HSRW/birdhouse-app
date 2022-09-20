/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lime': '#E3FFB1',
      'gray': '#83858B',
      'purple-600': '#9333EA'
    },
    fontFamily: {
      sans: ['Oxygen', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'tiny': '0.625rem',
      'sm': '.875rem',
    },
    extend: {},
  },
  plugins: [],
}
