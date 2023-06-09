import "bulma/css/bulma.css";
import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

//connecting redux store to react app
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
