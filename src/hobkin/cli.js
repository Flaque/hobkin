#!/usr/bin/env node
"use strict";

const meow = require("meow");
const hobkin = require(".");

const cli = meow(`
  Usage
    $ hobkin <file>
`);

hobkin(cli.input[0]);
