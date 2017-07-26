const sample = require("lodash.sample")

module.exports = function mostlyUnique(phrase, source){
  var item = sample(source)
  // try up to 15 times to choose a unique value that isn't already in our phrase
  for( var i=0; i <= 15; i++ ) {
    var stripped = item.replace(', ', '') // strip punctuation to make regex search for whole word phrase
    // match whole word/continuation (not parts of words like "up"->"upchuck|chuckup")
    if(phrase.match(new RegExp('^'+stripped+'| '+stripped+',? |'+stripped+'$'))){
      item = sample(source)
    }else{
      break
    }
  }
  return item
}
