import express from "express";
import React from "react";
import App from "./identico/ssr/index";
import { StaticRouter } from "react-router";
import reactDOMServer from "react-dom/server";
const app = express();
// app.use(express.static("identico"));

app.get("*", (req, res) => {
  console.log(req.url);
  const html = reactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.write(`Hola mundo desde ${req.url}`);
  // res.sendFile(__dirname + "/identico/index.html");
  res.end();
});

app.listen(3000);
console.log("estamos encendidos");
