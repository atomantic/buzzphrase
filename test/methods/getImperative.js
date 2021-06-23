const assert = require("chai").assert;
const buzzphrase = require("../../");

module.exports = function () {
  it("returns an imperative buzzphrase", function (done) {
    const imperativePhrase = buzzphrase.getImperative();
    assert(imperativePhrase);
    done();
  });
};
