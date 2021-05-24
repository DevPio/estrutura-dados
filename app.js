let daysOfWeek = new Array();

daysOfWeek = new Array(7);

daysOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(daysOfWeek.length);

for (let index = 0; index < daysOfWeek.length; index++) {
  console.log(daysOfWeek[index]);
}

const fibo = [];

fibo[1] = 1;

fibo[2] = 1;

for (let index = 3; index < 30; index++) {
  fibo[index] = fibo[index - 1] + fibo[index - 2];
}

console.log(fibo);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.firtItem = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
  return this;
};

Array.prototype.endItem = function (value) {
  this[this.length + 1] = value;

  return this;
};

Array.prototype.myPop = function () {
  let a = [];
  if (this.length == 0) {
    return [];
  }

  for (let index = 0; index < this.length - 1; index++) {
    a[index] = this[index];
  }

  return a;
};

Array.prototype.removeFirst = function () {
  for (let index = 1; index < this.length; index++) {
    this[index - 1] = this[index];
  }
  this.pop();

  return this;
};

Array.prototype.targetPosition = function (position) {
  let newArray = [];

  for (let index = 0; index < this.length; index++) {
    if (index !== position) {
      newArray.push(this[index]);
    }
  }

  return newArray;
};

let number = [1, 2, 3, 4, 5, 6];

console.log(number.splice(0, 3));
console.log(number);
number.splice(0, 0, 1, 2, 3);
console.log(number);

Array.prototype.reIndex = function () {
  let nArray = [];

  for (let index = 0; index < this.length; index++) {
    if (this[index] != undefined) {
      nArray.push(this[index]);
    }
  }

  return nArray;
};

Array.prototype.removeF = function () {
  for (let index = 0; index < this.length; index++) {
    this[index] = this[index + 1];
  }

  return this.reIndex();
};

let numberSh = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numberSh);

numberSh.shift();
console.log(numberSh);

let averageTempDAY1 = [24, 28, 37, 50, 21];
let averageTempDAY2 = [23, 50, 80, 1, 30];

let totalDay = [];

totalDay[0] = averageTempDAY1;
totalDay[1] = averageTempDAY2;

for (let index = 0; index < totalDay.length; index++) {
  for (let indexTwo = 0; indexTwo < totalDay[index].length; indexTwo++) {
    console.log(indexTwo);
  }
}

let matrix3x3x3x = [];

for (let indexMatrix1 = 0; indexMatrix1 < 3; indexMatrix1++) {
  matrix3x3x3x[indexMatrix1] = [];
  for (let indexMatrix2 = 0; indexMatrix2 < 3; indexMatrix2++) {
    matrix3x3x3x[indexMatrix1][indexMatrix2] = [];

    for (let indexMatrix3 = 0; indexMatrix3 < 3; indexMatrix3++) {
      matrix3x3x3x[indexMatrix1][indexMatrix2][indexMatrix3] =
        indexMatrix1 + indexMatrix2 + indexMatrix3;
    }
  }
}

for (let index = 0; index < matrix3x3x3x.length; index++) {
  for (let index2 = 0; index2 < matrix3x3x3x[index].length; index2++) {
    for (
      let index3 = 0;
      index3 < matrix3x3x3x[index][index2].length;
      index3++
    ) {
      console.log(matrix3x3x3x[index][index2][index3]);
    }
  }
}
