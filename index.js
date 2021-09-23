const format = require("./lib/format");

const defaultConfig = require("./config");

const buzzphrase = {
  // deprecated
  buzz: function (iterations) {
    console.log(buzzphrase.getPhrase(iterations));
  },
  // newer, official API
  get: function (config) {
    const conf = Object.assign({}, defaultConfig, config);
    let formatString = conf.format;
    if (conf.iterations > 1) {
      for (var i = 1; i < conf.iterations; i++) {
        formatString += "{c} " + conf.format;
      }
    }
    return format(formatString);
  },
  getImperative: function (iterations) {
    return buzzphrase.get({
      format: "{i} {v} {a} {N}",
    });
  },
  getPhrase: function (iterations) {
    return buzzphrase.get({
      iterations: iterations || 1,
    });
  },
  log: function (config) {
    console.log(buzzphrase.get(config));
  },
};
module.exports = buzzphrase;
