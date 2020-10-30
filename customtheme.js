import { theme } from "@chakra-ui/core";

const customTheme = {
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
      gotham: "Gotham Condensed"
    }
  }
};

export default customTheme;