const BinarySearchTree = require('./binarySearchTree');

describe('The Binary Search Tree', () => {
  it('returns null if value isnt passed in', () => {
    let tree = testTree();
    expect(tree.add()).toBe(null);
  });

  it('adds a node in the correct spot', () => {
    let tree = testTree();
    tree.add(20);
    expect(tree.inOrder()).toEqual([2, 5, 10, 12, 15, 20]);
  });

  it('should return a boolean representing if the value is in the tree or not', () => {
    let tree = testTree();
    expect(tree.contains(10)).toBeTruthy();
  });

  it('should return false if the values wasnt found in tree', () => {
    let tree = testTree();
    expect(tree.contains(1000)).toBeFalsy();
  });
});

function testTree() {
  let tree = new BinarySearchTree();
  tree.root = new BinarySearchTree.Node(10);
  tree.root.left = new BinarySearchTree.Node(5);
  tree.root.left.left = new BinarySearchTree.Node(2);
  tree.root.right = new BinarySearchTree.Node(15);
  tree.root.right.left = new BinarySearchTree.Node(12);

  return tree;
}
