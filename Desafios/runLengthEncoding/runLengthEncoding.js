function runLengthEncoding(string) {
  const uniques = [...new Set([...string.split("")])];
  let result = "";

  for (let index = 0; index < uniques.length; index++) {
    let counter = 0;
    let counterLetter = 0;
    const filter = string.split("").filter((l) => l === uniques[index]);
    while (counter < filter.length) {
      if (counterLetter >= 9) {
        result += counterLetter + uniques[index];
        counterLetter = 0;
      }

      counterLetter++;
      counter++;
    }

    result += counterLetter + uniques[index];
    counterLetter = 0;
    counter = 0;
  }

  return result;
}

runLengthEncoding("AAAAAAAAAAAAABBCCCCDD");
