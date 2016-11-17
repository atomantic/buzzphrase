#!/usr/bin/env node

const sample = require("lodash.sample");

// word lists
const verbs = require("./data/verbs");
const adjectives = require("./data/adjectives");
const nouns = require("./data/nouns");
const continuation = require("./data/continuation");

const mostlyUnique = function(phrase, source){
  var item = sample(source);
  // try up to 5 times to choose a unique value that isn't already in our phrase
  for( var i=0; i <= 15; i++ ) {
    if(phrase.indexOf(item)!==-1){
      item = sample(source);
    }else{
      break;
    }
  }
  return item;
};

const buzzphrase = {
  getPhrase: function(iterations) {
    var phrase = sample(verbs) + " " + sample(adjectives) + " " + sample(nouns);
    if(!iterations || --iterations < 1){
      return phrase;
    }
    for (var i = 0; i < iterations; i++) {
      phrase += mostlyUnique(phrase, continuation) + " " +
        mostlyUnique(phrase, verbs) + " " +
        mostlyUnique(phrase, adjectives) + " " +
        mostlyUnique(phrase, nouns);
    }
    return phrase;
  },
  buzz: function(iterations) {
    console.log(buzzphrase.getPhrase(iterations))
  }
};
module.exports = buzzphrase;


if((require.main || {}).filename === __filename){
  // running as a global command
  // via `npm install -g buzzphrase; buzzphrase`
  // just call it and let it all hang out:
  buzzphrase.buzz(process.argv[process.argv.length - 1]);
}
