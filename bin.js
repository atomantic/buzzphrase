#!/usr/bin/env node

const buzzphrase = require("./");
const defaultConfig = require("./config");

// via `npm install -g buzzphrase; buzzphrase`
// or `buzzphrase 2` (for a joining of 2 phrases)
const lastArg = process.argv[process.argv.length - 1];
const formatSpecified = lastArg.indexOf("{") !== -1;
const numberArg = formatSpecified
  ? process.argv[process.argv.length - 2]
  : lastArg;
const iterations = isNaN(Number(numberArg))
  ? defaultConfig.iterations
  : numberArg;
buzzphrase.log({
  format: formatSpecified ? lastArg : defaultConfig.format,
  iterations: iterations,
});
