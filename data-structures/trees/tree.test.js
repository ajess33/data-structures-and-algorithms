const BinaryTree = require('./tree');
// const BinarySearchTree = require('./binarySearchTree');

xdescribe('The Binary Tree', () => {
  it('can traverse preorder', () => {
    let tree = testTree();

    expect(tree.preOrder()).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('can traverse inorder', () => {
    let tree = testTree();

    expect(tree.inOrder()).toEqual(['D', 'B', 'E', 'A', 'F', 'C']);
    // expect(tree.inOrder()).toEqual(['D', 'B', 'E', 'A', 'F', 'C']);
  });

  it('can traverse postorder', () => {
    let tree = testTree();
    expect(tree.postOrder()).toEqual(['D', 'E', 'B', 'F', 'C', 'A']);
  });
});

function testTree() {
  let tree = new BinaryTree();

  tree.root = new BinaryTree.Node('A');
  tree.root.left = new BinaryTree.Node('B');
  tree.root.right = new BinaryTree.Node('C');
  tree.root.left.left = new BinaryTree.Node('D');
  tree.root.left.right = new BinaryTree.Node('E');
  tree.root.right.left = new BinaryTree.Node('F');

  return tree;
}
