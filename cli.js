#! /usr/bin/env node
const { program } = require("commander");

program.version("0.0.17");

require("./bin/load")(program);

program.parse();
