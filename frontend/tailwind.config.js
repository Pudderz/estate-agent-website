module.exports = {
  //purge all unused styles in producation
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./src/pages/*.{jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
