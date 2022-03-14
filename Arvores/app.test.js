const BinarySearchTree = require("./app");
const { deepStrictEqual } = require("assert");
const { describe, it } = require("mocha");

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

describe("tree search", () => {
  it("search for the highest value in the tree", () => {
    deepStrictEqual(tree.max(), 25);
  });

  it("find the lowest value in the tree", () => {
    deepStrictEqual(tree.min(), 3);
  });

  it("searches for a value in the tree, and returns true if it exist", () => {
    deepStrictEqual(tree.search(5), true);
  });

  it("searches for a value in the tree, and returns false if the value does not exist", () => {
    deepStrictEqual(tree.search(250), false);
  });
});
