import { theme } from "@chakra-ui/core";

const customtheme = {
  ...theme,
  colors: {
    ...theme.colors,
    cpc: {
        red: "#F1748A",
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#FDD56F"
    },
  },
  fonts: {
    ...theme.fonts, 
    cpc: {
      gothamCondensed: "Gotham Condensed, Sans-serif ",
      gothamMedium: "Gotham Medium, Sans-serif",
      gothamCondensedLight: "Gotham Condensed Light, Sans-serif",
      gothamCondensedBook: "Gotham Condensed Book, Sans-serif"
    }
  }
};

export default customtheme;