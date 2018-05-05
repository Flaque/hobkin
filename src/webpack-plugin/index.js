"use strict";

const path = require("path");
const { renderToString } = require("react-dom/server");
const React = require("react");
const fs = require("fs");
const handlebars = require("handlebars");

const flatten = arrs => [].concat.apply([], arrs);

class HobkinPlugin {
  constructor() {
    // TODO: Switch to async
    this.tmpl = fs.readFileSync("index.html.hbs");
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap("HobkinPlugin", comp => {
      const files = flatten(comp.chunks.map(c => c.files)).map(f =>
        path.resolve(comp.compiler.outputPath, f)
      );

      // TODO: work with other files
      const Component = require(files[0]).default;
      const str = renderToString(React.createElement(Component));

      fs.writeFile(
        path.resolve(comp.compiler.outputPath, "index.html"),
        str,
        err => {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  }
}

module.exports = HobkinPlugin;
