import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000000",
      },
    },
  },
  colors: {
    brand: {
      background: "#000000",
      accent: "#9191910d",
      primary: "#1E2022",
      secondary: "#D9D9D9",
      text: "#F0F5F9",
    },
  },
});

export default theme;
