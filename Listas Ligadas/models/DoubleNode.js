import { Node } from "./index.js";

export class DoubleNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
