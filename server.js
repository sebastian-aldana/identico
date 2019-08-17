const express = require("express");
const App = require("./identico/ssr/index");
const ReactRouter = require("react-router");
const app = express();

<ReactRouter.StaticRouter>
  <App />
</ReactRouter.StaticRouter>;

// app.use(express.static("identico"));

app.get("*", (req, res) => {
  console.log(req.url);
  res.write(`Hola mundo desde ${req.url}`);
  // res.sendFile(__dirname + "/identico/index.html");
  res.end();
});

app.listen(3000);
