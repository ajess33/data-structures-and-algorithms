const treeIntersection = require('./tree-intersection');
const BinaryTree = require('../../data-structures/trees/tree');

describe('The treeIntersection Method', () => {
  const tree1 = testTree();
  const tree2 = testTree2();

  it('should return an error if a tree is empty', () => {
    const emptyTree = new BinaryTree();
    let result = treeIntersection(tree1, emptyTree);
    expect(result).toBe(`Error. Empty tree`);
  });

  it('should return a hashTable of common values', () => {
    let result = treeIntersection(tree1, tree2);
    expect(result).toBeDefined();
  });
});

function testTree() {
  let tree = new BinaryTree();

  tree.root = new BinaryTree.Node(10);
  tree.root.left = new BinaryTree.Node(20);
  tree.root.right = new BinaryTree.Node(30);
  tree.root.left.left = new BinaryTree.Node(40);
  tree.root.left.right = new BinaryTree.Node(50);
  tree.root.right.left = new BinaryTree.Node(60);

  return tree;
}

function testTree2() {
  let tree = new BinaryTree();

  tree.root = new BinaryTree.Node(5);
  tree.root.left = new BinaryTree.Node(10);
  tree.root.right = new BinaryTree.Node(15);
  tree.root.left.left = new BinaryTree.Node(20);
  tree.root.left.right = new BinaryTree.Node(25);
  tree.root.right.left = new BinaryTree.Node(30);

  return tree;
}
