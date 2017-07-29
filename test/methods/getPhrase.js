const assert = require('chai').assert
const buzzphrase = require('../../')
const config = require('../config')

module.exports = function() {
  it('will get a unique buzzphrase', function(done) {
      var phrase1 = buzzphrase.getPhrase()
      var phrase2 = buzzphrase.getPhrase()

      assert(phrase1)
      assert(phrase2)
      assert.isAbove(phrase1.split(' ').length, 2, 'single phrase is more than 2 words')
      assert.notEqual(phrase1, phrase2, 'two generated phrases are different')
      done()
  })
  it('returns conjoined phrases', function(done) {
      var phrase1 = buzzphrase.getPhrase(2)
      var phrase2 = buzzphrase.getPhrase(3)
      var phrase1wc = phrase1.split(' ').length
      var phrase2wc = phrase2.split(' ').length
      // console.log('phrase1', phrase1wc, phrase1)
      // console.log('phrase2', phrase2wc, phrase2)

      assert(phrase1)
      assert(phrase2)
      assert.isAbove(phrase1wc, 6, 'double phrase is more than 6 words')
      assert.isBelow(phrase1wc, 10, 'double phrase is less than 10 words')
      assert.isAbove(phrase2wc, 9, 'triple phrase is more than 9 words')
      assert.isBelow(phrase2wc, 21, 'triple phrase is less than 21 words')
      assert.notEqual(phrase1, phrase2, 'two generated phrases are different')
      done()
  })


  it('returns reasonably unique words in combined phrases', function(done) {
    this.timeout(3000)
    // test conjoined phrases
    // as the set grows, tolerate a little more duplication of words
    for(var phraseLength=2; phraseLength<=15; phraseLength++){
      var acceptable = phraseLength-14 > 0 ? phraseLength-14 : 0
      var duplicateCount = 0
      var duplicateWords = []
      for(var iterations=0; iterations<=100; iterations++){
        var phrase = buzzphrase.getPhrase(phraseLength)
        // strip commas and split words
        var words = phrase.replace(new RegExp(',', 'g'), '').split(' ')
        // pad the string phrase so we can search for " word "
        phrase = ' ' + phrase + ' '
        words.map(function(word){
          // ok, or already logged as a duplicate
          if(config.repeatables.indexOf(word)!==-1 || duplicateWords.indexOf(word)!==-1) {
            return word
          }
          var regexp = new RegExp('( '+word+',? )', 'g')
          var matched = phrase.match(regexp)
          // if(matched.length > 1){
          //   console.log('repeats:', matched.length-1, regexp, word, phrase)
          // }
          var extraAppearances = matched.length-1
          if(extraAppearances) {
            // add anything over 1
            duplicateCount += extraAppearances
            duplicateWords.push(word)
          }
          return word
        })
      }
      assert.isBelow(
        duplicateCount,
        acceptable+1 ,
        'too many duplicates in ' + phraseLength + ' length phrase on "' + duplicateWords.join(',')+'"' + 'in phrase: '+phrase
      )
    }
    done()
  })
}
