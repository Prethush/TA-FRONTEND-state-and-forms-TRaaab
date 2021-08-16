module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        20: "0 1 20%",
        80: "0 1 80%",
        50: "0 1 47.5%"
      },
      boxShadow: {
        custom: "0px 0px 15px 8px rgba(0, 0, 0, .5)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
