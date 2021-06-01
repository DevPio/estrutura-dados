class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  push(...elements) {
    this.items.push(...elements);
  }
  pop() {
    return this.items.pop();
  }
  isEmty() {
    return this.items.length === 0;
  }
  clear() {
    while (!this.isEmty()) {
      this.items.pop();
    }
  }
  size() {
    return this.items.length;
  }
  toString() {
    return this.items.toString();
  }
}

let stack = new Stack();

console.log(stack.isEmty());

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);

console.log(stack.items);
const _items = Symbol("stackItems");
class StackObj {
  constructor() {
    this[_items] = {};
    this.count = 0;
  }

  push(element) {
    this[_items][this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmty() {
    return this.count == 0;
  }
  pop() {
    if (this.isEmty()) {
      return undefined;
    }
    this.count--;

    let result = this[_items][this.count];
    delete this[_items][this.count];

    return result;
  }
  peek() {
    if (this.isEmty()) {
      return undefined;
    }

    return this[_items][this.count - 1];
  }

  clear() {
    while (!this.isEmty()) {
      this.pop();
    }
  }

  toString() {
    if (this.isEmty()) {
      return "";
    }
    let objString = `${this[_items][0]}`;
    for (let index = 1; index < this.count; index++)
      objString = `${objString},${this[_items][index]}`;

    return objString;
  }
}

const stackObj = new StackObj();

stackObj.push(5);
stackObj.push(8);

console.log(stackObj.items);
console.log(stackObj.size());
console.log(stackObj.isEmty());
console.log(stackObj.pop());

let items = {
  0: 1,
  1: 2,
};
let count = 2;
console.log(items);

count--;

delete items[count];

console.log(items);

console.log(stackObj.toString());

console.log(Object.getOwnPropertyNames(stackObj));
console.log(Object.keys(stackObj));
console.log(stackObj.items);

class MetodsPrivates {
  #items = [];
  constructor() {
    console.log(this.#items);
  }
}

const metodsP = new MetodsPrivates();

function numberToBinary(number) {
  let stack = new Stack();
  let numberDiv = number;
  let stringBinary = "";
  let rem;
  while (numberDiv > 0) {
    rem = Math.floor(numberDiv % 2);
    stack.push(rem);
    numberDiv = Math.floor(numberDiv / 2);
  }

  while (!stack.isEmty()) {
    stringBinary += stack.pop();
  }

  return stringBinary;
}

function numberToBinaryOtherBase(number, base) {
  let stack = new Stack();
  let numberDiv = number;
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let stringBinary = "";
  let rem;

  if (!(base >= 2 && base <= 36)) return;
  while (numberDiv > 0) {
    rem = Math.floor(numberDiv % base);
    stack.push(rem);
    numberDiv = Math.floor(numberDiv / base);
  }

  while (!stack.isEmty()) {
    stringBinary += digits[stack.pop()];
  }

  return stringBinary;
}
