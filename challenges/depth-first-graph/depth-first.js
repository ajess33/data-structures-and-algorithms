const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const depthFirst = (graph, start) => {
  let stack = new Stack();
  let visited = new Set();

  if (graph.size() === 0)
    return [];

  let firstValue;
  if (typeof start !== 'undefined') {
    let startNode = graph.getNode(start);

    if (!startNode)
      throw 'Start not found!'; // TODO: test me

    firstValue = startNode.value;
  }
  else {
    let arr = graph.getNodes();
    firstValue = arr[0];
  }

  stack.push(firstValue);

  while (!stack.isEmpty()) {
    console.log('stack', stack);
    let current = stack.pop();

    visited.add(current);
    console.log('visited', visited);

    let neighbors = graph.getNeighbors(current);
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
