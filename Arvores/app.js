const Node = require("./Node.js");

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

        function isertItem(node) {
          try {
            if (node != null) {
              if (key > node.key) {
                if (node.right != null) {
                  isertItem(node.right);
                  return;
                }
                node.right = currentNode;
              } else {
                if (node.left != null) {
                  isertItem(node.left);
                  return;
                }
                node.left = currentNode;
              }
            }

            return true;
          } catch (error) {
            console.log(error);
          }
        }

        isertItem(current);
      }
    }
  }

  search(key) {
    if (key != null) {
      let current = this.root;

      if (current.key === key) {
        return true;
      }

      function searchItem(node) {
        if (node != null) {
          if (key > node.key) {
            if (node.right != null) {
              if (node.right.key === key) {
                return true;
              }
              return searchItem(node.right);
            }
          } else {
            if (node.left != null) {
              if (node.left.key === key) {
                return true;
              }
              return searchItem(node.left);
            }
          }

          return false;
        }
      }

      return searchItem(current);
    }
  }

  max() {
    let max = 0;
    const searchMax = (node) => {
      if (node != null) {
        if (node.right != null && node.right.key > max) {
          max = node.right.key;

          searchMax(node.right);
        }
      }

      return true;
    };

    searchMax(this.root);
    return max;
  }

  min() {
    let min = null;
    const searchMin = (node) => {
      if (node != null) {
        if (min == null) {
          min = node.left.key;
        }
        if (node.left != null) {
          if (node.left.key < min) {
            min = node.left.key;
          }

          searchMin(node.left);
        }
      }

      return true;
    };

    searchMin(this.root);
    return min;
  }

  remove(key) {
    function findItem(node) {
      if (node != null) {
        if (key > node.key) {
          if (node.right != null) {
            if (node.right.key === key) {
              return node.right;
            }
            return findItem(node.right);
          }
        } else {
          if (node.left != null) {
            if (node.left.key === key) {
              return node.left;
            }
            return findItem(node.left);
          }
        }

        return false;
      }
    }

    return findItem(this.root);
  }
}

module.exports = BinarySearchTree;
