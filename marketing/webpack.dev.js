const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

const dev = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, dev);