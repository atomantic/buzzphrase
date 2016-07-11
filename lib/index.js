#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash.sample");

var _lodash2 = _interopRequireDefault(_lodash);

var _verbs = require("../data/verbs");

var _verbs2 = _interopRequireDefault(_verbs);

var _adjectives = require("../data/adjectives");

var _adjectives2 = _interopRequireDefault(_adjectives);

var _nouns = require("../data/nouns");

var _nouns2 = _interopRequireDefault(_nouns);

var _continuation = require("../data/continuation");

var _continuation2 = _interopRequireDefault(_continuation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// word lists


var mostlyUnique = function mostlyUnique(phrase, source) {
  var item = (0, _lodash2.default)(source);
  // try up to 5 times to choose a unique value that isn't already in our phrase
  for (var i = 0; i <= 15; i++) {
    if (phrase.indexOf(item) !== -1) {
      item = (0, _lodash2.default)(source);
    } else {
      break;
    }
  }
  return item;
};

var buzzphrase = {
  getPhrase: function getPhrase() {
    var iterations = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

    var phrase = (0, _lodash2.default)(_verbs2.default) + ' ' + (0, _lodash2.default)(_adjectives2.default) + ' ' + (0, _lodash2.default)(_nouns2.default);
    if (--iterations < 1) {
      return phrase;
    }
    for (var i = 0; i < iterations; i++) {
      phrase += mostlyUnique(phrase, _continuation2.default) + " " + mostlyUnique(phrase, _verbs2.default) + " " + mostlyUnique(phrase, _adjectives2.default) + " " + mostlyUnique(phrase, _nouns2.default);
    }
    return phrase;
  },
  buzz: function buzz(iterations) {
    console.log(buzzphrase.getPhrase(iterations));
  }
};
exports.default = buzzphrase;


if (require.main.filename === __filename) {
  // running as a global command
  // via `npm install -g buzzphrase buzzphrase`
  // just call it and let it all hang out:
  buzzphrase.buzz(process.argv[process.argv.length - 1]);
}