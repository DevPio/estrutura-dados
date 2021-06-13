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

class Deque {
  constructor() {
    this.items = {};
    this.remove = 0;
    this.count = 0;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element) {
    if (this.isEmpity()) {
      this.addBack(element);
    } else if (this.remove > 0) {
      this.remove--;
      this.items[this.remove] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }

      this.items[0] = element;
      this.count++;
    }
  }

  removeFront() {
    const result = this.items[this.remove];
    delete this.items[this.remove];
    this.remove++;

    return result;
  }

  removeBack() {
    if (this.isEmpity()) return;
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;

    return result;
  }

  peekFront() {
    return this.items[this.remove];
  }

  peekBack() {
    return this.items[this.count - 1];
  }
  isEmpity() {
    return this.count == 0;
  }
  size() {
    return this.count - this.remove;
  }
}

const de = new Deque();

de.addFront(1);
de.addFront(2);
de.addFront(3);
de.addFront(4);
de.addFront(5);

console.log(de.items);

de.removeFront();
de.removeFront();
de.removeBack();
console.log(de.items);
console.log(de.peekFront());
console.log(de.peekBack());

function hotPotato(elements, num) {
  const quee = new Queue();
  const eliminateList = [];

  for (let index = 0; index < elements.length; index++) {
    quee.enqueue(elements[index]);
  }

  while (quee.size() > 1) {
    for (let index = 0; index < num; index++) {
      quee.enqueue(quee.dequeue());
    }

    eliminateList.push(quee.dequeue());
  }

  return {
    eliminados: eliminateList,
    winner: quee.dequeue(),
  };
}

let names = ["Jessyca", "Luccas", "Carla", "Beatriz", "Clarice", "João"];

console.log(hotPotato(names, 7));

function palindromoChecker(aString) {
  if (aString == undefined || aString == null || aString.length == 0)
    return false;

  const de = new Deque();
  const loweString = aString.toLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;

  for (let index = 0; index < loweString.length; index++) {
    de.addBack(loweString.charAt(index));
  }

  while (de.size() > 1 && isEqual) {
    firstChar = de.removeFront();
    lastChar = de.removeBack();

    if (firstChar != lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(palindromoChecker("au"));
console.log(palindromoChecker("cocô"));
