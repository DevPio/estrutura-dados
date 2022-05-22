const BinarySearchTree = require("./app");
const BALANCE_FACTOR = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};
class AVLTree extends BinarySearchTree {
  constructor(compareFn) {
    this.root = null;
    this.compare = compareFn;
  }

  getNodeHeight(node) {
    if (node === null) return -1;

    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor(node) {
    const differenceHeight =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (differenceHeight) {
      case -2:
        return BALANCE_FACTOR.UNBALANCED_RIGHT;

      case -1:
        return BALANCE_FACTOR.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BALANCE_FACTOR.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BALANCE_FACTOR.UNBALANCED_LEFT;

      default:
        return BALANCE_FACTOR.BALANCED;
    }
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;

    return tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  rotationLR(node) {
    node.left = this.rotationLR(node.left);

    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);

    return this.rotationRR(node);
  }

  insert(key) {}

  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    } else if (node.key < key) {
      node.left = this.insertNode(node.left, key);
    } else if (node.key > key) {
      node.right = this.insertNode(node.right.key);
    } else {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BALANCE_FACTOR.UNBALANCED_LEFT) {
      if (node.left.key < key) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }

    if (balanceFactor === BALANCE_FACTOR.UNBALANCED_RIGHT) {
      if (node.right.key > key) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }

    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node === null) {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BALANCE_FACTOR.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);

      if (
        balanceFactorLeft === BALANCE_FACTOR.BALANCED ||
        balanceFactorLeft === BALANCE_FACTOR.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }

      if (balanceFactorLeft === BALANCE_FACTOR.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }

    if (balanceFactor === BALANCE_FACTOR.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);

      if (
        balanceFactorRight === BALANCE_FACTOR.BALANCED ||
        balanceFactorRight === BALANCE_FACTOR.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationLL(node);
      }

      if (balanceFactorRight === BALANCE_FACTOR.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLR(node.right);
      }
    }
    return node;
  }
}

module.exports = AVLTree;
