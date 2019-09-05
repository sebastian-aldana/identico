import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app";
const app = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app
);
