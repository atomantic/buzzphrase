#!/usr/bin/env node
'use strict';

var random = require('lodash.random');
var words = require('./data/words');

var getRandom = function(key) {
  return words[key][random(0, words[key].length - 1)];
};
var createPhrase = function() {
  return getRandom('start') + ' ' + getRandom('middle') + ' ' + getRandom('end');
};

var buzzphrase = {
  getPhrase: function(iterations){
    var phrase = createPhrase();
    if(!iterations || --iterations < 1){
      return phrase;
    }
    for (var i = 0; i < iterations; i++) {
      phrase += getRandom('continuation') + ' ' + createPhrase();
    }
    return phrase;
  },
  buzz: function(iterations){
    console.log(buzzphrase.getPhrase(iterations));
  }
};
module.exports = buzzphrase;


if(require.main.filename === __filename){
  // running as a global command
  // via `npm install -g buzzphrase; buzzphrase`
  // just call it and let it all hang out:
  buzzphrase.buzz(process.argv[process.argv.length - 1]);
}
