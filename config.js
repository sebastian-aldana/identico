const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  output: {
    filename: "assets/app.js",
    // chunkFilename: "[name].js",
    // path: "/",
    path: path.resolve(__dirname, "/"),
    // chunkFilename: "js/[id].js",
    // chunkFilename: "js/[id].js",
    publicPath: "/"
  },
  // output: {
  //   path: path.resolve(__dirname, "identico"),
  //   filename: "js/[name].js"
  // },
  resolve: {
    extensions: [".js", ".jsx", ".styl"]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      name: true,
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
          priority: 1,
          filename: "assets/vendor.js",
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              chunks =>
                chunks.name !== "vendor" && /[\\/]node_modules[\\/]/.test(name)
            );
          }
        }
      }
    }
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
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
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
          },
          "postcss-loader"
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
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/app.css"
      // chunkFilename: "[id].css"
    })
  ]
};
