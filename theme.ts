import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#121213",
      },
    },
  },
  colors: {
    brand: {
      background: "#121213",
      accent: "#52616B",
      primary: "#1E2022",
      secondary: "#D9D9D9",
      text: "#F0F5F9",
    },
  },
});

export default theme;
