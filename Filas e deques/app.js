class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.remove = 0;
  }

  enqueue(value) {
    this.items[this.count] = value;
    this.count++;
  }
  peek() {
    if (this.isEmpity()) {
      return undefined;
    }
    return this.items[this.remove];
  }
  dequeue() {
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

  size() {
    return this.count - this.remove;
  }

  clear() {
    while (!this.isEmpity()) {
      this.dequeue();
    }
  }

  toString() {
    if (this.isEmpity()) return undefined;

    let objString = "";

    for (let index = this.remove; index < this.count; index++) {
      objString += `${index},${this.items[index]}\n`;
    }

    return objString;
  }
}

let q = new Queue();

console.log(q.isEmpity());

q.enqueue("John");
q.enqueue("Jack");

console.log(q.toString());

q.enqueue("Camila");

q.dequeue();
q.dequeue();

console.log(q.toString());
console.log(q.size());
