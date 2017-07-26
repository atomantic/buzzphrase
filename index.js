#!/usr/bin/env node
const sample = require("lodash.sample")

// word lists
const adjectives = require("./data/adjectives")
const continuation = require("./data/continuation")
const imperative = require("./data/verbs.imperative")
const nounsPlural = require("./data/nouns.plural")
const nounsSingular = require("./data/nouns.singular")
const verbs = require("./data/verbs")

const mostlyUnique = require('./lib/unique')

const buzzphrase = {
  buzz: function(iterations) {
    console.log(buzzphrase.getPhrase(iterations))
  },
  getImperative: function(iterations){
    return sample(imperative) + ' ' + buzzphrase.getPhrase(iterations)
  },
  getPhrase: function(iterations) {
    var phrase = sample(verbs) + " " + sample(adjectives) + " " + sample(nounsPlural)
    if(!iterations || --iterations < 1){
      return phrase
    }
    for (var i = 0; i < iterations; i++) {
      phrase += mostlyUnique(phrase, continuation) + " " +
        mostlyUnique(phrase, verbs) + " " +
        mostlyUnique(phrase, adjectives) + " " +
        mostlyUnique(phrase, nounsPlural)
    }
    return phrase
  }
};
module.exports = buzzphrase


if((require.main || {}).filename === __filename){
  // running as a global command
  // via `npm install -g buzzphrase; buzzphrase`
  // just call it and let it all hang out:
  buzzphrase.buzz(process.argv[process.argv.length - 1]);
}
