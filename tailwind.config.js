/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'extra-large': '3.2rem',
        'large': '2.2rem',
      },
      colors: {
        purple: {
          '100': '#8F62E112', // 7.2% opacity
          '600': '#9367E7',   // 60% opacity
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #9367E7 60%, #8F62E112 7.2%)',
      },
    },
  },
  plugins: [],
};
