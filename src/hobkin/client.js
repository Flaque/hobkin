"use strict";

/**
 * This file will get included in the user's page.
 * It probably shouldn't depend on anything within the project or be used
 * by anything else in the project.
 */

const React = require("react");
const ReactDOM = require("react-dom");

// Do some sanity checks to enforce this pages usage.
if (!window) {
  throw new Error(
    "client.js is being used server side somewhere, window is not defined"
  );
}

function render() {
  if (!window.default) {
    throw new Error(
      "Hobkin can't find a default UMD Module to render, window.default is not defined"
    );
  }

  // This module is included via the bundle.js
  const Component = window.default;

  // Grab root and do sanity checks
  const root = document.getElementById("root");
  if (root === undefined || root === null) {
    throw new Error(
      "Can't find the element with the id 'root' needed for React to render."
    );
  }

  // Finall render the real page
  ReactDOM.hydrate(React.createElement(Component), root);
}

window.onload = render;
