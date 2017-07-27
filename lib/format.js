const sample = require('lodash.sample')
const unique = require('./unique')

// words
const adjectives = require('../data/adjectives')
const continuation = require('../data/continuation')
const imperative = require('../data/verbs.imperative')
const final = require('../data/final')
const nounsPlural = require('../data/nouns.plural')
const nounsSingular = require('../data/nouns.singular')
const verbs = require('../data/verbs')
/**
 * format a string
 * @param format {string} The string format
 * @example: format('{a} {v} {n}')
 * @return {string} 'adjective verb singularNoun' phrase
 */
module.exports = function format(format){
  // until each item is replaced
  // we don't want to do a /g global in one swoop because we need to run
  // unique test on the string as it builds
  while( /\{[a-zA-Z]\}/.test(format) ){
    format = format.replace(/{a}/, function(){ return unique(format, adjectives) })
    .replace(/{c}/, function(){ return unique(format, continuation) })
    .replace(/{i}/, function(){ return unique(format, imperative) })
    .replace(/{v}/, function(){ return unique(format, verbs) })
    .replace(/{N}/, function(){ return unique(format, nounsPlural) })
    .replace(/{n}/, function(){ return unique(format, nounsSingular) })
    .replace(/{f}/, function(){ return unique(format, final) })
  }
  return format
}
