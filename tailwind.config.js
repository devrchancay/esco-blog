module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Source Sans Pro"],
      body: ["Raleway"],
    },
    fill: theme => ({
      ["gray-900"]: theme("colors.gray.900"),
      white: theme("colors.white"),
    }),
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1rem",
        lg: "3rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        back: `var(--back)`,
        primary: `var(--primary)`,
        javascript: `var(--javascript)`,
        muted: `var(--muted)`,
        react: `var(--react)`,
        name: `var(--name)`,
      },
    },
  },
  variants: {},
  plugins: [],
}
