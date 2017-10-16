#!/usr/bin/env node
const merge = require('lodash.merge')
const format = require('./lib/format')

const defaultConfig = {
  // see format method docs for format string options
  format: '{v} {a} {N}',
  // iterations is just a shortcut for concatenating "{c}"+format
  // n times on your format string
  iterations: 1
}

const buzzphrase = {
  buzz: function(iterations) {
    console.log(buzzphrase.getPhrase(iterations))
  },
  // newer, official API
  get: function(config){
    var conf = merge({}, defaultConfig, config)
    var formatString = conf.format
    if(conf.iterations > 1){
      for(var i=1; i<conf.iterations; i++){
        formatString += '{c} ' + conf.format
      }
    }
    return format(formatString)
  },
  getImperative: function(iterations){
    return buzzphrase.get({
      format: '{i} {v} {a} {N}'
    })
  },
  getPhrase: function(iterations) {
    return buzzphrase.get({
      iterations: iterations||1
    })
  },
  log: function(config) {
    console.log(buzzphrase.get(config))
  },
};
module.exports = buzzphrase


if((require.main || {}).filename === __filename){
  // running as a global command
  // via `npm install -g buzzphrase; buzzphrase`
  // just call it and let it all hang out:
  var lastArg = process.argv[process.argv.length - 1]
  var formatSpecified = lastArg.indexOf('{')!==-1
  var numberArg = formatSpecified ? process.argv[process.argv.length - 2] : lastArg
  var iterations = isNaN(Number(numberArg)) ? defaultConfig.iterations : numberArg
  buzzphrase.log({
    format: formatSpecified ? lastArg : defaultConfig.format,
    iterations: iterations
  })
}
