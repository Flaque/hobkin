const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactPlugin = require("../plugin-react-ssr");

module.exports = {
  mode: "development", // TODO: Change to env variable
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    libraryTarget: "umd",
    globalObject: "this"
  },
  entry: {
    client: require.resolve("./client")
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
  plugins: [new HtmlWebpackPlugin(), new ReactPlugin()]
};
