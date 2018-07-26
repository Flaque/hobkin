const webpack = require("webpack");
const config = require("./hobkin.config");
const file = process.argv[2];

// Setup Webpack
config.entry = "./" + file;
config.mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

// Compile it up
webpack(config, (err, stats) => {
  console.log(
    stats.toString({
      colors: true // duh
    })
  );
});
