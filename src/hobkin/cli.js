#!/usr/bin/env node
"use strict";

const meow = require("meow");
const hobkin = require(".");

const USAGE = `
  Usage
    $ hobkin <file>
`;

const cli = meow(USAGE);

if (cli.input.length === 0) {
  console.error(USAGE);
  process.exit(0);
}

hobkin(cli.input[0]);
