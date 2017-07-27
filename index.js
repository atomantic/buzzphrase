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
    let conf = merge({}, defaultConfig, config)
    if(conf.iterations > 1){
      for(var i=1; i<conf.iterations; i++){
        conf.format += '{c} ' + conf.format
      }
    }
    return format(conf.format)
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
  }
};
module.exports = buzzphrase


if((require.main || {}).filename === __filename){
  // running as a global command
  // via `npm install -g buzzphrase; buzzphrase`
  // just call it and let it all hang out:
  buzzphrase.buzz(process.argv[process.argv.length - 1])
}
