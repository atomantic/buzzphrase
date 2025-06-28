const assert = require("chai").assert;
const buzzphrase = require("../../");
const config = require("../config");

module.exports = function () {
  it("will get a unique buzzphrase", function (done) {
    const phrase1 = buzzphrase.get();
    const phrase2 = buzzphrase.get();

    assert(phrase1);
    assert(phrase2);
    assert.isAbove(
      phrase1.split(" ").length,
      2,
      "single phrase is more than 2 words"
    );
    assert.notEqual(phrase1, phrase2, "two generated phrases are different");
    done();
  });
  it("returns conjoined phrases (20x test)", function (done) {
    for (let i = 0; i <= 20; i++) {
      let phrase1 = buzzphrase.get({ iterations: 2 });
      let phrase2 = buzzphrase.get({ iterations: 3 });
      let phrase1wc = phrase1.split(" ").length;
      let phrase2wc = phrase2.split(" ").length;
      // console.log('phrase1', phrase1wc, phrase1)
      // console.log('phrase2', phrase2wc, phrase2)
      assert(phrase1);
      assert(phrase2);
      assert.isAbove(phrase1wc, 6, "double phrase is more than 6 words");
      assert.isBelow(phrase1wc, 11, "double phrase is less than 11 words");
      assert.isAbove(phrase2wc, 9, "triple phrase is more than 9 words");
      assert.isBelow(phrase2wc, 21, "triple phrase is less than 21 words");
      assert.notEqual(phrase1, phrase2, "two generated phrases are different");
    }
    done();
  });

  it("returns reasonably unique words in combined phrases (2500x test)", function (done) {
    this.timeout(5000);
    // test conjoined phrases
    // as the set grows, tolerate a little more duplication of words
    for (let phraseLength = 2; phraseLength <= 25; phraseLength++) {
      let acceptable = phraseLength - 2 > 0 ? phraseLength - 2 : 0;
      let duplicateCount = 0;
      let duplicateWords = [];
      let phrase;
      for (let iterations = 0; iterations <= 100; iterations++) {
        phrase = buzzphrase.get({ iterations: phraseLength });
        // strip commas and split words
        let words = phrase.replace(new RegExp(",", "g"), "").split(" ");
        // pad the string phrase so we can search for " word "
        phrase = " " + phrase + " ";
        words.map(function (word) {
          // ok, or already logged as a duplicate
          if (
            config.repeatables.indexOf(word) !== -1 ||
            duplicateWords.indexOf(word) !== -1
          ) {
            return word;
          }
          let regexp = new RegExp("( " + word + ",? )", "g");
          let matched = phrase.match(regexp);
          // if(matched.length > 1){
          //   console.log('repeats:', matched.length-1, regexp, word, phrase)
          // }
          let extraAppearances = matched.length - 1;
          if (extraAppearances) {
            // add anything over 1
            duplicateCount += extraAppearances;
            duplicateWords.push(word);
          }
          return word;
        });
      }
      // console.log(
      //   'buzzphrase.get({iterations: '+phraseLength+'}) allows',
      //   acceptable,
      //   'duplicate in 100 iterations, found',
      //   duplicateCount
      // )
      assert.isBelow(
        duplicateCount,
        acceptable + 1,
        "too many duplicates in " +
          phraseLength +
          ' length phrase on "' +
          duplicateWords.join(",") +
          '"' +
          "in phrase: " +
          phrase
      );
    }
    done();
  });
};
