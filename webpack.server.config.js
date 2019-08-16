const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "identico"),
    filename: "ssr/[name].js",
    publicPath: "/",
    chunkFilename: "js/[id].js",
    libraryTarget: "commonjs2"
  },
  target: "node",
  resolve: {
    extensions: [".js", ".jsx", ".styl"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      // {
      //   test: /\.json$/,
      //   exclude: /(node_modules)/,
      //   loader: "json-loader"
      // },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100,
            fallback: "file-loader",
            name: "images/[name].[ext]"
          }
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      file: "public/index.html"
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json")
    })
  ]
};
