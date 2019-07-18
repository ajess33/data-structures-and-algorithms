const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const depthFirst = (list) => {
  let stack = new Stack();
  let visited = new Set();

  if (list.size() === 0)
    return [];

  let arr = list.getNodes();

  stack.push(arr[0]);

  while (!stack.isEmpty()) {
    console.log('stack', stack);
    let current = stack.pop();

    visited.add(current);
    console.log('visited', visited);

    let neighbors = list.getNeighbors(current);
    let neighborValues = neighbors.map((ne) => ne.node.value).reverse();

    neighborValues.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    });
  }
  return Array.from(visited);
};

module.exports = depthFirst;
