function groupAnagrams(words) {
  const resultWords = [];
  for (let index = 0; index < words.length; index++) {
    const currentWord = words[index];
    const currentArray = [];

    for (let indexCompar = index; indexCompar < words.length; indexCompar++) {
      const comparWord = words[indexCompar];

      if (anagranHelp(currentWord, comparWord)) currentArray.push(comparWord);
    }

    let add = true;
    currentArray.forEach((byteArray) => {
      for (let index = 0; index < resultWords.length; index++) {
        const currentArray = resultWords[index];

        if (currentArray.includes(byteArray)) {
          add = false;
          break;
        }
      }
    });

    if (add) {
      resultWords.push(currentArray);
    } else {
      add = true;
    }
  }

  return resultWords
}

function anagranHelp(currentWord, comparWord) {
  const firstWord = currentWord.split("").sort().join("");
  const secondWord = comparWord.split("").sort().join("");

  if (firstWord === secondWord) return true;

  return false;
}
