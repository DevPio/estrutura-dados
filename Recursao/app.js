const understandRecursion = (doIunderstandRecursion) => {
  let recursionAnswer = confirm("Do you understand recursion?");

  if (recursionAnswer) return true;

  return understandRecursion(doIunderstandRecursion);
};

//understandRecursion();

const fatorialIterativo = (number) => {
  if (number < 0) return undefined;
  let fatorial = 1;

  for (let index = number; index >= 1; index--) fatorial *= index;

  return fatorial;
};

console.log(fatorialIterativo(5));

const fatorialRecursivoPlus = (number, counter = 1) => {
  if (counter >= number) {
    return counter;
  }
  return counter * fatorialRecursivoPlus(number, counter + 1);
};

const fatorialRecursivoLess = (number) => {
  if (number <= 1) {
    return 1;
  }

  return number * fatorialRecursivoLess(number - 1);
};
console.log(fatorialRecursivoPlus(5));
console.log(fatorialRecursivoLess(5));

//Write a recursive function called nestedEvenSum

//. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj) {
  let keys = Object.keys(obj);
  let sum = 0;
  for (let index = 0; index < keys.length; index++) {
    if (typeof obj[keys[index]] === "number" && obj[keys[index]] % 2 === 0) {
      sum += obj[keys[index]];
    }
    if (typeof obj[keys[index]] === "object") {
      sum += nestedEvenSum(obj[keys[index]]);
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(obj1));

/*
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in 
both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving 
symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B 
above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.



Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).






*/

function diffSet(setOne, setTwo) {
  const setDiff = new Set();

  setOne.forEach((element) => {
    if (!setTwo.has(element)) {
      setDiff.add(element);
    }
  });

  return [...setDiff];
}

function helper(args) {
  if (args.length == 1) {
    return args;
  }

  let resolve = [
    ...diffSet(new Set(args[0]), new Set(args[1])).concat(
      diffSet(new Set(args[1]), new Set(args[0]))
    ),
  ];

  return helper([resolve].concat(args.slice(2)));
}

let sym = (...array) => {
  let result = helper([...array]);

  return result[0].sort((a, b) => a - b);
};
console.log(sym([1, 2, 3], [5, 2, 1, 4])); //expected [3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4])); //expected three elements.
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); //expected [3, 4, 5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //expected [2, 3, 4, 6, 7]
