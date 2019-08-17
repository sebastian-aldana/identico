const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    modules: ["react", "react-dom", "bootstrap", "jquery", "popper.js", "aos"]
  },
  output: {
    path: path.resolve(__dirname, "identico"),
    filename: "js/[name].js",
    library: "[name]"
  },
  target: "node",
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};
