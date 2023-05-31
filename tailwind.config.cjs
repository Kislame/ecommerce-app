/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E4E87',
          dark: '#132E4E',
          light: '#C5DDEE',
          blend: '#3AA5B3',
          gray: '#131415',
        },
        purple: {
          light: '#F4E3FF',
          medium: '#665687',
          dark: '#3D2B5A',
        },
      },
      fontFamily: {
        open: 'Open Sans , sans-serif',
        playfair: 'Playfair Display ,  serif',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
