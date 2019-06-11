const lib = require('../../challenges/stacksAndQueues/stacks-and-queues');

class Node {
  constructor(value) {
    (this.value = value), (this.left = this.right = null);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadth() {
    const queue = new lib.Queue();
    let result = [];
    if (this.root) queue.enqueue(this.root);

    while (queue.head) {
      let current = queue.dequeue();
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
      result.push(current.value);
    }
    return result;
  }

  preOrder() {
    let result = [];
    travserse(this.root);
    return result;

    // Recursive Helper
    function travserse(node) {
      if (!node) {
        return;
      }

      result.push(node.value);

      travserse(node.left);
      travserse(node.right);
    }
  }

  inOrder() {
    let result = [];
    traverse(this.root);
    return result;

    // Recursive Helper
    function traverse(node) {
      if (!node) {
        return;
      }

      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
  }

  postOrder() {
    let result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (!node) {
        return;
      }

      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
  }
}

module.exports = BinaryTree;

// Export Node constructor as property of BinaryTree constructor
BinaryTree.Node = Node;
