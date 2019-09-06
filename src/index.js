import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import App from "./app";
const app = document.getElementById("app");
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Router>,
  app
);
