class Node {
  constructor(value) {
    (this.value = value), (this.leftChild = this.rightChild = null);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    preOrderVisit(this.root);
    return result;

    // Recursive Helper
    function preOrderVisit(node) {
      if (!node) {
        return;
      }

      result.push(node.value);

      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }

  inOrder() {}

  postOrder() {}
}

module.exports = BinaryTree;

// Export Node constructor as property of BinaryTree constructor
BinaryTree.Node = Node;
