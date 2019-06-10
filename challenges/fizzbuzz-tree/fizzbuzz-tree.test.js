const BinaryTree = require('../../data-structures/trees/tree');
const fizzBuzzTree = require('./fizzbuzz-tree.js');

describe('The FizzBuzz Tree Function', () => {
  it('sends an error message if the tree is empty', () => {
    let tree = new BinaryTree();
    expect(fizzBuzzTree(tree)).toBe(`Nothing in tree`);
  });

  it('correctly replaces all numbers divisible by 3 with Fizz', () => {
    let tree = testTree();
    const result = fizzBuzzTree(tree);
    expect(result).toBeDefined();
    expect(result.root.value).toBe('Fizz');
  });

  it('correctly replaces all numbers divisible by 5 with Buzz', () => {
    let tree = testTree();
    const result = fizzBuzzTree(tree);
    expect(result).toBeDefined();
    expect(result.root.left.value).toBe('Buzz');
  });

  it('correctly replaces all numbers divisible by 3 and 5 with FizzBuzz', () => {
    let tree = testTree();
    const result = fizzBuzzTree(tree);
    expect(result).toBeDefined();
    expect(result.root.right.value).toBe('FizzBuzz');
  });
});

function testTree() {
  let binaryTree = new BinaryTree();

  binaryTree.root = new BinaryTree.Node(3);
  binaryTree.root.left = new BinaryTree.Node(5);
  binaryTree.root.right = new BinaryTree.Node(15);
  binaryTree.root.left.left = new BinaryTree.Node(2);
  binaryTree.root.left.right = new BinaryTree.Node(16);
  binaryTree.root.right.left = new BinaryTree.Node(4);

  return binaryTree;
}
