import "./assets/css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import App from "./App";
import webDiplomacyTheme from "./webDiplomacyTheme";
import store from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={webDiplomacyTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
