const unique = require("./unique");

// words
const adjectives = require("../data/adjectives");
const continuation = require("../data/continuation");
const final = require("../data/final");
const nounsPlural = require("../data/nouns.plural");
const nounsSingular = require("../data/nouns.singular");
const verbsImperative = require("../data/verbs.imperative");
const verbsPast = require("../data/verbs.past");
const verbsPresent = require("../data/verbs.present");
/**
 * format a string
 * @param format {string} The string format
 * @example: format('{a} {v} {n}')
 * @return {string} 'adjective verb singularNoun' phrase
 */
module.exports = function format(format) {
  // until each item is replaced
  // we don't want to do a /g global in one swoop because we need to run
  // unique test on the string as it builds
  while (/\{[a-zA-Z]\}/.test(format)) {
    format = format
      .replace(/{a}/, () => unique(format, adjectives))
      .replace(/{c}/, () => unique(format, continuation))
      .replace(/{i}/, () => unique(format, verbsImperative))
      .replace(/{V}/, () => unique(format, verbsPresent))
      .replace(/{v}/, () => unique(format, verbsPast))
      .replace(/{N}/, () => unique(format, nounsPlural))
      .replace(/{n}/, () => unique(format, nounsSingular))
      .replace(/{f}/, () => unique(format, final));
  }
  return format;
};
