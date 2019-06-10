class Node {
  constructor(value) {
    (this.value = value), (this.left = this.right = null);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
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
