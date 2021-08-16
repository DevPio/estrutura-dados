import { Node } from "./models/index.js";
import { DoubleNode } from "./models/DoubleNode.js";
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

  remove(element) {
    let elementIndex = this.indexOf(element);

    return this.removeAt(elementIndex);
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

  indexOf(element) {
    // if (element != null) {
    //   let current = this.head;
    //   while (current.next != null || current.element != null) {
    //     if (current.element == element) {
    //       return current;
    //     }
    //     current = current.next;
    //   }
    // }
    // return undefined;

    let current = this.head;

    for (let index = 0; index < this.count && current != null; index++) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      current = current.next;
    }

    return -1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }

    let objString = `${this.head}`;
    let current = this.head.next;
    for (let index = 0; index < this.size() && current != null; index++) {
      objString = `${objString}${current.element}`;

      current = current.next;
    }

    return objString;
  }
}

const linkList = new LinkedList();

linkList.push(1);
linkList.push(2);
linkList.push(3);

linkList.insert(8, 1);

let element = linkList.indexOf(3);

let resultString = linkList.toString();

class DoublyLinkedList extends LinkedList {
  constructor(equals = defaultStatus) {
    super(equals);
    this.tail = null;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new DoubleNode(element);
      let current = this.head;
      if (index == 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      }
    }
  }
}
