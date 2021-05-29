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

//metods array

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

let a3 = a1.concat(a2);

let bools = [1, true, !false, !0, 1];

let u = bools.every((item) => item == true);

console.log(u);

function isEven(x) {
  return x % 2 == 0;
}

let numberIte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numberIte.forEach(isEven);

let arrayBoool = numberIte.map(isEven);
let filterArray = numberIte.filter(isEven);
let sumNumber = numberIte.reduce((ac, currente) => ac + currente, 0);
console.log(arrayBoool);
console.log(filterArray);
console.log(sumNumber);

let iterator = numberIte[Symbol.iterator]();

for (const n of iterator) {
  console.log(n);
}

let ent = numberIte.entries();

for (const n of ent) {
  console.log(n);
}

let dobro = Array.from(numberIte, (x) => x * 2);

console.log(dobro);

let n34 = Array.of(1);
let n35 = Array.of(1, 2, 3, 4, 5, 6);

console.log(n34);

let nOther = [1, 2, 3, 4, 5, 6];

console.log(nOther);

nOther.copyWithin(0, 3);

console.log(nOther);

let contrario = numberIte.reverse();

console.log(contrario);
console.log(contrario.reverse());

let numberSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}
let retSort = numberSort.sort(compare);

console.log(retSort);

let friends = [
  { name: "Jonh", idade: 30 },
  { name: "Ana", idade: 20 },
  { name: "Cris", idade: 20 },
];

function compareAge(a, b) {
  if (new Date(a.idade).getTime() < new Date(b.idade).getTime()) {
    return -1;
  }
  if (new Date(a.idade).getTime() > new Date(b.idade).getTime()) {
    return 1;
  }

  return 0;
}

// console.log(friends.sort(compareAge));

const dates = [
  {
    nome: "Tarefa",
    data: "2020/04/20",
  },
  {
    nome: "Tarefa",
    data: "2020/02/10",
  },
  {
    nome: "Tarefa",
    data: "2020/08/13",
  },
];

function reverseDate(data) {
  let newByteArray = [];

  for (let index = data.length; index > 0; index--) {
    newByteArray.push(data[index - 1]);
  }

  return newByteArray;
}

let d = dates
  .sort((a, b) => new Date(a.data) - new Date(b.data))
  .map((data) => ({
    nome: data.nome,
    dataFormat: Intl.DateTimeFormat("pt-BR").format(Date.parse(data.data)),
  }));

console.log(d);
console.log(reverseDate(d));

let namesComp = ["Ana", "ana", "jonh", "John"];

console.log(namesComp.sort());

let rn = namesComp.sort((a, b) =>
  a.toLowerCase() > b.toLowerCase()
    ? 1
    : a.toLowerCase() < b.toLowerCase()
    ? -1
    : 0
);

console.log(rn);

console.log(namesComp.sort((a, b) => a.localeCompare(b)));

//pesquisas

let numberPesquisas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 14, 13];

console.log(numberPesquisas.indexOf(10));
console.log(numberPesquisas.lastIndexOf(10));

function mult13(value) {
  return !(value % 13);
}

console.log(numberPesquisas.find(mult13));
console.log(numberPesquisas.findIndex(mult13));

console.log(numberPesquisas.includes(13));
console.log(numberPesquisas.includes(20));

console.log(numberPesquisas.toString());
console.log(numberPesquisas.join("-"));

let len = 5;

let int16 = new Int16Array(len);

let array16 = [];

array16.length = len;

for (let index = 0; index < len; index++) {
  int16[index] = index + 1;
}

console.log(int16);
