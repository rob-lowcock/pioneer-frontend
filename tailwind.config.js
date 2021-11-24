module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#06d6a0',
        yellow: '#FFD166',
        red: '#EF476F',
        blue: '#118AB2',
        navy: '#073B4C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
