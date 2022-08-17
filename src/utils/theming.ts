import {createTheme} from "@mui/material/styles";

let customTheme = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif;",
    h1: {
      fontSize: "2rem",
      fontWeight: "500",
    },
  },
});

export default customTheme;
