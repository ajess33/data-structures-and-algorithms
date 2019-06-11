const BinarySearchTree = require('./binarySearchTree');

xdescribe('The Binary Search Tree', () => {
  it('returns null if value isnt passed in', () => {
    let tree = testTree();
    console.log(tree);
    expect(tree.add()).toBe(null);
  });
  it('adds a node in the correct spot', () => {
    let tree = testTree();
    tree.add(20);
    console.log(tree.inOrder());
    expect(tree.inOrder()).toEqual([2, 5, 10, 12, 15, 20]);
    // expect(tree.root.right.right.value).toBe(20);
  });

  it('returns a boolean representing whether or not the specified value is in the tree', () => {});
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
