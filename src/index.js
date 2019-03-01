import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./js/components/App.jsx";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
