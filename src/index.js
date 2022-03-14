import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./contexts/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
