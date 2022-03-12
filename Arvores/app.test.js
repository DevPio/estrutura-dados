const BinarySearchTree = require("./app");
const { deepStrictEqual } = require("assert");

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(-1);
tree.insert(7);
tree.insert(3);
tree.insert(9);
tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(100);
tree.insert(18);

console.log(tree.remove(18));
deepStrictEqual(tree.insert(25), undefined);

deepStrictEqual(tree.search(5), true);
deepStrictEqual(tree.search(250), false);

deepStrictEqual(tree.max(), 100);

deepStrictEqual(tree.min(), -1);

tree.root;
