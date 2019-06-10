const fizzBuzzTree = (tree) => {
  if (!tree.root) return `Nothing in tree`;

  visit(tree.root);
  function visit(node) {
    if (typeof node.value === 'number') {
      console.log(node.value);
      if (node.value % 15 === 0) {
        node.value = 'FizzBuzz';
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
      }
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    }
  }
  return tree;
};

module.exports = fizzBuzzTree;
