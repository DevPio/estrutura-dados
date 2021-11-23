import { Node } from "./Node.js";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (key != null) {
      const currentNode = new Node(key);
      if (this.root == null) {
        this.root = currentNode;
      } else {
        let current = this.root;
        const searchRight = (node) => {
          if (key < node.key) {
            if (node.left == null) {
              node.left = currentNode;
              return true;
            } else {
              searchRight(node.left);
            }
          }
          if (key > node.key) {
            if (node.right == null) {
              node.right = currentNode;
              return true;
            } else {
              searchRight(node.right);
            }
          }
        };
        if (key > current.key) {
          return searchRight(current);
        } else {
          return searchRight(current);
        }
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(9);
tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);

console.log(tree.root);
