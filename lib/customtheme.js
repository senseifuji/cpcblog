import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    cpc: {
        red: "#F1748A",
        white: "#FFFFFF",
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