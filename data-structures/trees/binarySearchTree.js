const BinaryTree = require('./tree');

class Node {
  constructor(value) {
    (this.value = value), (this.left = this.right = null);
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (!value) return null;
    let current;
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      current = this.root;

      while (current) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
    return this;
  }

  // accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once
  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
BinarySearchTree.Node = Node;
