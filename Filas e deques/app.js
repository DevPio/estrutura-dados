class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.remove = 0;
  }

  push(value) {
    this.items[this.count] = value;
    this.count++;
  }
  peek() {
    return this.items[this.remove];
  }
  pop() {
    if (this.isEmpity()) {
      return undefined;
    }

    let result = this.items[this.remove];

    delete this.items[this.remove];

    this.remove++;
    return result;
  }
  isEmpity() {
    return this.count == 0;
  }
}

let q = new Queue();

q.push(1);
q.push(2);
q.push(3);
q.push(3);

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

console.log(q.items);
