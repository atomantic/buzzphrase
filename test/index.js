'use strict'

const assert = require('chai').assert
const buzzphrase = require('../')
const exec = require('child_process').exec
const config = require('./config')

describe('buzzphrase', function() {

  describe('buzzphrase.getPhrase()', require('./methods/getPhrase'))

  describe('buzzphrase.buzz()', function() {
    it('returns nothing with buzz() (STDOUT)', function() {
      var phrase = buzzphrase.buzz()
      assert(!phrase)
    })
  })

  describe('buzzphrase.getImperative()', function() {
    it('returns an imperative buzzphrase', function() {
        var imperativePhrase = buzzphrase.getImperative()
        assert(imperativePhrase)
    })
  })

  describe('global cli tool', function() {
    it('runs as a global cli', function() {
      exec('node ../', function(error, stdout, stderr) {
        assert.isNull(error)
        assert(stdout)
        assert.isNull(stderr)
      })
    })
  })

})
