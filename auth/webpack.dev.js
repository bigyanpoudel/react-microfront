const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");
const dev = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "index.html",
      manifest: "./public/manifest.json",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    "react-hot-loader",
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};

module.exports = merge(commonConfig, dev);
