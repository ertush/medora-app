const windmill = require('@windmill/react-ui/config')

module.exports = windmill(
{
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "light-yellow": "#db0000",
        "light-green": "#49a760",
        "dark-green": "#0f305e",
        "darker-green": "#0f305e",
        "dark-maroon":"#813d3b",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
       }

    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
)
