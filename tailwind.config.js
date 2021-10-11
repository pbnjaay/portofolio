module.exports = {
  purge: {
    content: ["./*.html", "./js/*.js"],
    enabled: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Rubik"', "sans-serif"],
    },
    colors: {
      dusk: "#202022",
      night: "#151515",
      dawn: "#949495",
      zenith: "#fff",
    },
    textColor: {
      zenith: "#fff",
      dawn: "#949495",
    },
  },
  variants: {
    extend: {
      width: ["group-hover"],
    },
  },
  plugins: [],
};
