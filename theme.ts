import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1E2022",
      },
    },
  },
  colors: {
    brand: {
      background: "#1E2022",
      accent: "#52616B",
      primary: "#C9D6DF",
      secondary: "#D9D9D9",
      text: "#F0F5F9",
    },
  },
});

export default theme;
