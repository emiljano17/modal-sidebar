import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AppProvider } from "./context";

import "./index.css";

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);
