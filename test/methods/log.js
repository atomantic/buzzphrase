const assert = require('chai').assert
const buzzphrase = require('../../')
const config = require('../config')
const exec = require('child_process').exec

module.exports = function() {
  it('will log a phrase to STDOUT', function(done) {
    exec(
      `echo 'const bp = require("${__dirname}/../../"); bp.log()' | node`,
      function(error, stdout, stderr) {
      assert.isNull(error)
      assert(stdout)
      assert.equal('', stderr)
      done()
    })
  })
}
