import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "@mui/material/styles";
import customTheme from "./utils/theming";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
