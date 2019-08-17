var express = require("express");
var app = express();
app.use(express.static("identico"));

app.get("*", (req, res) => {
  console.log(req.url);
  res.write(`Hola mundo desde ${req.url}`);
  res.end();
});

app.listen(3000);
