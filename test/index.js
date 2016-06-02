'use strict';

var assert = require('chai').assert;
var buzzphrase = require('../');
var exec = require('child_process').exec;

describe('buzzphrase', function() {
  describe('buzzphrase.getPhrase()', function() {
    it('will get a unique buzzphrase', function() {
        var phrase1 = buzzphrase.getPhrase();
        var phrase2 = buzzphrase.getPhrase();

        assert(phrase1);
        assert(phrase2);
        assert.equal(phrase1.split(' ').length, 3, 'single phrase is 3 words');
        assert.notEqual(phrase1, phrase2, 'two generated phrases are different');
    });
    it('returns conjoined phrases', function() {
        var phrase1 = buzzphrase.getPhrase(2);
        var phrase2 = buzzphrase.getPhrase(3);
        var phrase1wc = phrase1.split(' ').length;
        var phrase2wc = phrase2.split(' ').length;
        // console.log('phrase1wc', phrase1wc);
        // console.log('phrase2wc', phrase2wc);

        assert(phrase1);
        assert(phrase2);
        assert.isAbove(phrase1wc, 6, 'double phrase is more than 6 words');
        assert.isBelow(phrase1wc, 10, 'double phrase is less than 10 words');
        assert.isAbove(phrase2wc, 9, 'triple phrase is more than 9 words');
        assert.isBelow(phrase2wc, 18, 'triple phrase is less than 18 words');
        assert.notEqual(phrase1, phrase2, 'two generated phrases are different');
    });

    // TODO: work out testing the gamut of options with an acceptable probability threshold for repeats
    it('returns reasonably unique words in combined phrases', function() {
        var phrase = buzzphrase.getPhrase(2);
        // strip commas and split words
        var words = phrase.replace(/,/g, '').split(' ');
        // pad the string phrase so we can search for " word "
        phrase = ' ' + phrase + ' ';
        // safe words
        var repeatables = ['by','to','of','on','for','which','in'];
        // exists
        assert(phrase);
        words.map(function(word){
          if(repeatables.indexOf(word)!==-1){
            return word;
          }
          var regexp = new RegExp('('+word+')', 'g');
          var occurances = phrase.match(regexp).length;
          assert.equal(occurances, 1, 'word ('+word+') appears only once');
          return word;
        });
    });
  });
  describe('buzzphrase.buzz()', function() {
    it('returns nothing with buzz() (STDOUT)', function() {
      var phrase = buzzphrase.buzz();
      assert(!phrase);
    });
  });
  describe('global cli tool', function() {
    it('runs as a global cli', function() {
      exec('node ../', function(error, stdout, stderr) {
        assert.isNull(error);
        assert(stdout);
        assert.isNull(stderr);
      });
    });
  });
});
