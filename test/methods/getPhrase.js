const assert = require('chai').assert
const buzzphrase = require('../../')
const config = require('../config')

module.exports = function() {
  it('will get a unique buzzphrase', function() {
      var phrase1 = buzzphrase.getPhrase()
      var phrase2 = buzzphrase.getPhrase()

      assert(phrase1)
      assert(phrase2)
      assert.equal(phrase1.split(' ').length, 3, 'single phrase is 3 words')
      assert.notEqual(phrase1, phrase2, 'two generated phrases are different')
  })
  it('returns conjoined phrases', function() {
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
      assert.isBelow(phrase2wc, 20, 'triple phrase is less than 20 words')
      assert.notEqual(phrase1, phrase2, 'two generated phrases are different')
  })


  it('returns reasonably unique words in combined phrases', function() {
    // test conjoined phrases
    // as the set grows, tolerate a little more duplication of words
    for(var phraseLength=2; phraseLength<=14; phraseLength++){
      var acceptable = phraseLength-2
      var duplicateCount = 0
      var duplicateWords = []
      for(var iterations=0; iterations<=100; iterations++){
        var phrase = buzzphrase.getPhrase(phraseLength)
        // strip commas and split words
        var words = phrase.replace(/,/g, '').split(' ')
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
      console.log(
        'buzzphrase.getPhrase('+phraseLength+') allows',
        acceptable,
        'duplicate in 100 iterations, found',
        duplicateCount
      )
      assert.isBelow(
        duplicateCount,
        acceptable+1 ,
        'too many duplicates in ' + phraseLength + ' length phrase on "' + duplicateWords.join(',')+'"' + 'in phrase: '+phrase)
    }
  })
}
