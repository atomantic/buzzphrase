const sample = require('lodash.sample')

/**
 * mostlyUnique grabs a random item from the source set
 * that has been tried up to 15 times to not exist within the phrase string
 * @param phrase {string} The existing phrase
 * @param source {array} The source to sample
 * @return item {string} The randomly sampled item from source
 */
module.exports = function mostlyUnique(phrase, source){
  var item = sample(source)
  // try up to 15 times to choose a unique value that isn't already in our phrase
  for( var i=0; i <= 15; i++ ) {
    // strip punctuation to make regex search for whole word phrase
    // e.g. ", which blah blah" => "which blah blah"
    var stripped = item.replace(', ', '')
    // match whole word/continuation (not parts of words like 'up'->'upchuck|chuckup')
    if(phrase.match(new RegExp('^'+stripped+'| '+stripped+',? | '+stripped+'$'))){
      item = sample(source)
    }else{
      break
    }
  }
  return item
}
