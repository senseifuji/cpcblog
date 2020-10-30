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
};

export default customTheme;