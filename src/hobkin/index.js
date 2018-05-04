#!/usr/bin/env node
"use strict";

const config = require("./config");
const webpack = require("webpack");
const path = require("path");

const combineMessages = msgs => {
  return msgs.reduce((all, msg) => all + msg);
};

function exitIfProblems(err, stats) {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(combineMessages(err.details));
    }
    process.exit(1);
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(combineMessages(info.errors));
    process.exit(1);
  }

  if (stats.hasWarnings()) {
    console.warn(combineMessages(info.warnings));
    process.exit(1);
  }
}

module.exports = file => {
  config.entry = path.resolve(process.cwd(), file);
  webpack(config, (err, stats) => {
    exitIfProblems(err, stats);

    // console.log(stats.toString());
  });
};
