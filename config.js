const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  output: {
    filename: "js/[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "identico"),
    chunkFilename: "js/[id].js"
  },
  // output: {
  //   path: path.resolve(__dirname, "identico"),
  //   filename: "js/[name].js"
  // },
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
          // options: {
          //   compact: true
          // }
        }
      },
      // {
      //   test: /\.json$/,
      //   loader: "file-loader"
      // },
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              name: "css/[name].css"
            }
          },
          {
            loader: "css-loader",
            options: {
              import: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              name: "css/[name].css"
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            fallback: "file-loader",
            name: "images/[name].[ext]"
          }
        }
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      file: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 10,
  //     name: "commons"
  //   }
  // }
};
