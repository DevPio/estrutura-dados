class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[0];
  }
  pushElement(...elements) {
    this.items.push(...elements);
  }
  popElements() {
    return this.items.pop();
  }
  isEmty() {
    return this.items.length == 0;
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

let s = new Stack();

s.pushElement(1, 2, 3, 4, 5, 6, 6);
console.log(s.popElements());
console.log(s.items);
