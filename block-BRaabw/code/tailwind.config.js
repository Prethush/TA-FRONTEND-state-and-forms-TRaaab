module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        10: "0 1 15%",
        80: "0 1 82%",
        25: "0 1 25%"
      },

      height: {
        custom: "25rem"
      },
      colors: {
        custom: "rgb(27,26,32)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
