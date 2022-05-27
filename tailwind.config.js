module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        galint: {
          purple: {
            DEFAULT:"#41349B",
            dark:"#09001e",
            darker: "#100b43"
          }
        }
      },
      fontFamily: {
        tahoma: ["Tahoma", "sans-serif"],
        lato: ["Lato", "serif"],
      }
    },
  },
  variants: {},
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [require("@tailwindcss/typography")],
};
