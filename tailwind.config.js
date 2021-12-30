module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        green: '#06d6a0',
        yellow: '#FFD166',
        red: '#EF476F',
        blue: '#118AB2',
        navy: '#073B4C',
        background: '#F3F9FD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
