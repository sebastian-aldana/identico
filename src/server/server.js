import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();

const ENV = process.env.NODE_ENV || development;
const PORT = process.env.PORT || 3000;

const app = express();

if (ENV === "development") {
  console.log("Loading dev config");
  const webpackConfig = require("../../config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `httt://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script async src="assets/app.js"></script>
   
  </body>
  <!-- Start of  Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=9825f111-4e56-4d71-95b6-308978b81479"> </script>
<!-- End of  Zendesk Widget script -->
</html>  
  `);
});

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server runnning on ${PORT}`);
});
