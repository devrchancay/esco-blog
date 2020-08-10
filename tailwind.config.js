module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    typography: theme => ({
      default: {
        css: [
          {
            color: `var(--primary)`,
            thead: {
              color: `var(--primary)`,
            },
            code: {
              background: `var(--muted)`,
              borderRadius: theme("borderRadius.default"),
              padding: theme("padding.md"),
            },
            h1: {
              fontFamily: theme("fontFamily.display"),
              color: `var(--primary)`,
            },
            h2: {
              fontFamily: theme("fontFamily.display"),
              color: `var(--primary)`,
            },
            h3: {
              fontFamily: theme("fontFamily.display"),
              color: `var(--primary)`,
            },
            h4: {
              fontFamily: theme("fontFamily.display"),
              color: `var(--primary)`,
            },
            h5: {
              fontFamily: theme("fontFamily.display"),
              color: `var(--primary)`,
            },
            h6: {
              fontFamily: theme("fontFamily.display"),
              color: `var(--primary)`,
            },
            strong: {
              color: `var(--primary)`,
            },
            p: {
              fontFamily: theme("fontFamily.body"),
            },
            a: {
              color: `var(--primary)`,
              textDecoration: "underline",
            },
          },
        ],
      },
    }),
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
  plugins: [require("@tailwindcss/typography")],
}
