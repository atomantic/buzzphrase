#!/usr/bin/env node

const sample = require('lodash.sample');
const words = require('./data/words');

var createPhrase = function() {
  return sample(words.start) + ' ' + sample(words.middle) + ' ' + sample(words.end);
};

var buzzphrase = {
  getPhrase: function(iterations){
    var phrase = createPhrase();
    if(!iterations || --iterations < 1){
      return phrase;
    }
    for (var i = 0; i < iterations; i++) {
      phrase += sample(words.continuation) + ' ' + createPhrase();
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
