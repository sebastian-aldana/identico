const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    modules: ["react", "react-dom", "bootstrap", "jquery", "popper.js"]
  },
  output: {
    path: path.resolve(__dirname, "public_html"),
    filename: "js/[name].js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};
