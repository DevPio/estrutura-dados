function firstNonRepeatingCharacter(string) {
  for (let index = 0; index < string.length; index++) {
    if (repeate(string[index], string) === 1) return index;
  }
  return -1;
}

function repeate(letter, word) {
  let countRepeat = 0;

  for (let index = 0; index < word.length; index++) {
    if (letter === word[index]) countRepeat += 1;
  }

  return countRepeat;
}

module.exports = {
  firstNonRepeatingCharacter,
};
