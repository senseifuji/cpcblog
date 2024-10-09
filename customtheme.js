import { theme } from "@chakra-ui/react";

const customtheme = {
  ...theme,
  colors: {
    ...theme.colors,
    cpc: {
        red: "#F1748A",
        redLight: "#f192a7",
        white: "#FFFFFF",
        black: "#000000",
        blackLight: "#333333",
        yellowLight: "#FDD56F",
        yellow: "#f9c450",
        blue: "#2c7ca1",
        blueDark: "#1a1b2f",
        blueMedium: "#54a3bd",
        blueLight: "#84cad9",
        purple: "#a479b0",
        pink: "#ec5096",
        redAnti: "#ed4462",
        redCoor: "#ec4796"
    },
  },
  fonts: {
    ...theme.fonts, 
    cpc: {
      gothamCondensed: "Gotham Condensed, Sans-serif ",
      gothamMedium: "Gotham Medium, Sans-serif",
      gothamBold: "Gotham Bold, Sans-serif",
      gothamBook: "Gotham-Book, Sans-serif",
      gothamCondensedLight: "Gotham Condensed Light, Sans-serif",
      gothamCondensedBook: "Gotham Condensed Book, Sans-serif",
      spaceMonoBold: "SpaceMono Bold, Sans-serif",
      spaceMonoRegular: "SpaceMono Regular, Sans-serif",
      spaceMonoItalic: "SpaceMono Italic, Sans-serif"
    }
  }
};

export default customtheme;
