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

  inOrder() {
    let result = [];
    inOrderVisit(this.root);
    return result;

    function inOrderVisit(node) {
      if (!node) {
        return;
      }
      console.log(node.value);
      inOrderVisit(node.leftChild);
      result.push(node.value);
      inOrderVisit(node.leftChild);
    }
  }

  postOrder() {
    let result = [];
    postOrderVisit(this.root);
    return result;

    function postOrderVisit(node) {
      if (!node) {
        return;
      }

      postOrderVisit(node.leftChild);
      postOrderVisit(node.rightchild);
      result.push(node.value);
    }
  }
}

module.exports = BinaryTree;

// Export Node constructor as property of BinaryTree constructor
BinaryTree.Node = Node;
