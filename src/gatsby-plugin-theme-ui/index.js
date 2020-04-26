export const colors = {
  text: {
    light: "#D6DEE7",
    medium: "#363636",
    dark: "hsla(0, 0%, 0%, 0.8)",
  },

  background: {
    light: "#D6DEE7",
    dark: "#363636",
  },
  links: {
    light: "#969960",
    dark: "#6a6e29",
  },
  white: "#fefefe",
  black: "#161616",
  darkGrey: "#242424",
  primary: "#969960",
  secondary: "#7279B6",
  accent: "#B569C2",
  muted: "#f1f3f4",
  transparent: "#ffffff00",
}

export const fonts = {
  body: `Gothic A1, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  sans-serif`,
  heading: `Merriweather, system-ui, serif`,
  logo: `Cormorant Garamond`,
  monospace: `Fira Code, monospace`,
}

export default {
  space: [0, 3, 9, 15, 30, 63, 72, 81, 96, 120, 140, 180, 200, 300],
  breakpoints: ["40em", "52em", "64em"],
  fonts,
  fontSizes: [9, 12, 15, 18, 21, 24, 33, 48, 63, 96],
  fontWeights: {
    light: 100,
    body: 300,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    card: 1.2,
  },
  colors,
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text.dark",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h2: {
      color: "text.dark",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text.dark",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text.dark",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text.dark",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text.dark",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text.medium",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
