"use strict";

const path = require("path");
const { renderToString } = require("react-dom/server");
const React = require("react");
const fs = require("fs");
const requireFromString = require("require-from-string");

const PLUGIN = "ReactPlugin";

const getHtmlFromReactString = str => {
  const Component = requireFromString(str).default;
  return renderToString(React.createElement(Component));
};

class ReactPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN, compilation => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
        PLUGIN,
        (data, cb) => {
          const src = compilation.assets["app.bundle.js"].source();
          const html = getHtmlFromReactString(src);

          // Put the HTML rendered content at the beginning of the array
          data.body.unshift({
            tagName: "div",
            attributes: {
              id: "root"
            },
            closeTag: true,
            innerHTML: html
          });

          cb(null, data);
        }
      );
    });
  }
}

module.exports = ReactPlugin;
