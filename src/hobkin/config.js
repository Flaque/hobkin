const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactPlugin = require("../plugin-react-ssr");

const env =
  process.env.NODE_ENV !== "production" ? "development" : "production";

module.exports = {
  mode: env,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(process.cwd(), "public"),
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
