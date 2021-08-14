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
      let previous = this.getElementAt(index - 1);

      current = previous.next;

      // for (let ite = 0; ite < index; ite++) {
      //   previous = current;
      //   current = current.next;
      // }

      previous.next = current.next;

      this.count--;
      return current.element;
    }

    return undefined;
  }
  get _head() {
    return this.head;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;

      for (let index = 0; index < index && node != null; index++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let prev = this.getElementAt(index - 1);
        let current = prev.next;

        node.next = current;
        prev.next = node;
      }
      this.count++;
      return true;
    }

    return false;
  }
}

const linkList = new LinkedList();

linkList.push(1);
linkList.push(2);
linkList.push(3);

linkList.insert(8, 1);
