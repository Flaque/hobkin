"use strict";

const path = require("path");
const { renderToString } = require("react-dom/server");
const React = require("react");

const flatten = arrs => [].concat.apply([], arrs);

class HobkinPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("HobkinPlugin", comp => {
      const files = flatten(comp.chunks.map(c => c.files)).map(f =>
        path.resolve(comp.compiler.outputPath, f)
      );

      if (!files || files.length === 0) {
        return;
      }

      // TODO: Check if chunk is loaded before we require.

      const Component = require(files[0]).default;
      const str = renderToString(React.createElement(Component));

      // TODO Add HTML asset here.
    });
  }
}

module.exports = HobkinPlugin;
