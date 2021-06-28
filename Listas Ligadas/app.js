import { Node } from "./models/index.js";
import { defaultEquals } from "./utils/index.js";

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index) {
    let current;

    if (index >= 0 && index <= this.count) {
      current = this.head;
    }

    if (index == 0) {
      this.head = current.next;
    } else {
      let previous;

      for (let ite = 0; ite < index; ite++) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;

      this.count--;
      return current.element;
    }

    return undefined;
  }
  get _head() {
    return this.head;
  }
}

const linkList = new LinkedList();

linkList.push(1);
linkList.push(2);
linkList.push(3);

let iterable = linkList._head;

console.log(linkList.removeAt(1));

console.log(linkList.head);

// while (iterable.next != null) {
//   console.log(iterable.next);

//   iterable = iterable.next;
// }
