import { Node } from "./models";
import { defaultEquals } from "./utils";

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
}
