module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        custom: "0 1 47.5%",
        secondary: "0 1 61%",
        primary: "0 1 35%"
      },
      boxShadow: {
        custom: "0px 0px 18px 7px rgba(0, 0, 0, .5)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
