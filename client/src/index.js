import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: grey[900],
    },
  },
});

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
