const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "node",
  devServer: {
    port: "9500",
    contentBase: ["./public"],
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};