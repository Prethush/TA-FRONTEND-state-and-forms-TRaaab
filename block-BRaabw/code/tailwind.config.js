module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        10: "0 1 15%",
        80: "0 1 82%",
        25: "0 1 25%",
        70: "0 1 65%"
      },

      height: {
        custom: "25rem"
      },
      colors: {
        custom: "rgb(27,26,32)"
      },
      width: {
        custom: "24vw"
      },
      boxShadow: {
        custom: "0px -6px 10px rgba(0, 0, 0, .5)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
