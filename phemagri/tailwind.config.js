module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "light-yellow": "#f7c35f",
        "light-green": "#49a760",
        "dark-green": "#255946",
        "darker-green": "#1f4e3d",
        "dark-maroon":"#813d3b",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
