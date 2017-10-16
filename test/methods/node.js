const assert = require('chai').assert
const buzzphrase = require('../../')
const config = require('../config')
const exec = require('child_process').exec

module.exports = function() {
  it('runs as globally installed node app', function(done) {
    exec('node '+__dirname+'/../../', function(error, stdout, stderr) {
      assert.isNull(error)
      assert(stdout)
      assert.equal('', stderr)
      done()
    })
  })
  it('allows format option as globally installed node app', function(done) {
    exec('node '+__dirname+'/../../ 1 "{v} {a} {N}"', function(error, stdout, stderr) {
      assert.isNull(error)
      assert(stdout)
      assert(stdout.split(' ').length > 1)
      assert.equal('', stderr)
      done()
    })
  })
}
