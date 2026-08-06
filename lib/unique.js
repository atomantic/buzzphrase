const sample = (arr) => {
  const len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
};

// escape regex special characters so words like ".COM" or "2.0" are matched
// literally instead of "." acting as a wildcard
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * mostlyUnique grabs a random item from the source set
 * that has been tried up to 15 times to not exist within the phrase string
 * @param phrase {string} The existing phrase
 * @param source {array} The source to sample
 * @return item {string} The randomly sampled item from source
 */
module.exports = function mostlyUnique(phrase, source) {
  let item = sample(source);
  let tried = [];
  // try up to 15 times to choose a unique value that isn't already in our phrase
  for (let i = 0; i <= 15; i++) {
    // strip punctuation to make regex search for whole word phrase
    // e.g. ", which blah blah" => "which blah blah"
    let stripped = escapeRegExp(item.replace(", ", ""));
    // match whole word/continuation (not parts of words like 'up'->'upchuck|chuckup')
    if (
      phrase.match(
        new RegExp("^" + stripped + "| " + stripped + ",? | " + stripped + "$")
      )
    ) {
      // don't waste retries resampling the same duplicate we already ruled out
      tried.push(item);
      const untried = source.filter((s) => tried.indexOf(s) === -1);
      item = sample(untried.length ? untried : source);
    } else {
      break;
    }
  }
  return item;
};
