const BinaryTree = require('./tree');

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (!value) return null;
    let newNode = new BinaryTree.Node(value);
    function addHelper(tree) {
      if (tree.value > value && tree.left === null) {
        tree.left = newNode;
      } else if (tree.value > value) {
        addHelper(tree.left);
      } else if (tree.value < value && tree.right === null) {
        tree.right = newNode;
      } else if (tree.value < value) {
        addHelper(tree.right);
      }
    }
    addHelper(this);
  }
  // accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once
  contains(value) {
    if (!value || !this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }
}

module.exports = BinarySearchTree;
