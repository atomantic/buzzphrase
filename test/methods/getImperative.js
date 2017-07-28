const assert = require('chai').assert
const buzzphrase = require('../../')

module.exports = function() {
  it('returns an imperative buzzphrase', function() {
      var imperativePhrase = buzzphrase.getImperative()
      assert(imperativePhrase)
  })
}
