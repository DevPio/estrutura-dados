const BinarySearchTree = require("./app");

const binarySearch = new BinarySearchTree();

binarySearch.insert(11);
binarySearch.insert(7);
binarySearch.insert(15);
binarySearch.insert(5);
binarySearch.insert(9);
binarySearch.insert(3);
binarySearch.insert(6);
binarySearch.insert(8);
binarySearch.insert(10);
binarySearch.insert(13);
binarySearch.insert(20);
binarySearch.insert(12);
binarySearch.insert(14);
binarySearch.insert(20);
binarySearch.insert(18);
binarySearch.insert(25);

console.log(binarySearch.root);
binarySearch.remove(20);
console.log(binarySearch.root);

let nodeMin = binarySearch.root;

while (nodeMin != null && nodeMin.left) {
  nodeMin = nodeMin.left;
}

console.log(nodeMin);
let nodeMax = binarySearch.root;

while (nodeMax != null && nodeMax.right) {
  nodeMax = nodeMax.right;
}
console.log(nodeMax);

function search(key, root) {
  if (!key) return false;
  if (!root) return false;
  if (root.key === key) {
    return true;
  }
  if (key < root.key) {
    return search(key, root.left);
  }

  if (key > root.key) {
    return search(key, root.right);
  }
}

// console.log(search(7, binarySearch.root));
// console.log(search(25, binarySearch.root));
// console.log(search(3, binarySearch.root));
