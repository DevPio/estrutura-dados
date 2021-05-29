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
}

let stack = new Stack();

console.log(stack.isEmty());

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);

console.log(stack.items);

class StackObj {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
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

    let result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }
}

const stackObj = new StackObj();

stackObj.push(5);
stackObj.push(8);

console.log(stackObj.items);
console.log(stackObj.size());
console.log(stackObj.isEmty());
console.log(stackObj.pop());
