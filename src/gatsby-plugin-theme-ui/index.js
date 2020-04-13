export default {
  space: [0, 3, 9, 15, 30, 63, 129, 255, 510],
  fonts: {
    body: `Gothic A1, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    heading: `Merriweather, system-ui, serif`,
    monospace: `Fira Code, monospace`,
  },
  fontSizes: [9, 12, 15, 18, 21, 24, 33, 48, 63, 96],
  fontWeights: {
    body: 300,
    heading: 600,
    light: 100,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: {
      light: "#D6DEE7",
      medium: "#363636",
      dark: "#161616",
    },

    background: {
      light: "#D6DEE7",
      dark: "#363636",
    },
    white: "#fefefe",
    black: "#161616",
    primary: "#BCBF88",
    secondary: "#7279B6",
    accent: "#B569C2",
    muted: "#f1f3f4",
  },
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
