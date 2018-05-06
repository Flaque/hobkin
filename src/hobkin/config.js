const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HobkinPlugin = require("../webpack-plugin");

module.exports = {
  mode: "development", // TODO: Change to env variable
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ["babel-loader", "@mdx-js/loader"]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new HobkinPlugin()]
};
