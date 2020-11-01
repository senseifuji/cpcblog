import { theme } from "@chakra-ui/core";

const customtheme = {
  ...theme,
  colors: {
    ...theme.colors,
    cpc: {
        red: "#F1748A",
        redLight: "f192a7",
        white: "#FFFFFF",
        black: "#000000",
        blackLight: "#333333",
        yellow: "#FDD56F",
        blue: "#2c7ca1",
        blueMedium: "#54a3bd",
        blueLight: "#84cad9"
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