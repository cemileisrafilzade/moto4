import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";

import App from "./App";

import { Provider } from "react-redux";
import state from "./state/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={state}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

initializeIcons();
