const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const depthFirst = (list) => {
  let stack = new Stack();
  let visited = new Set();

  if (list.size() === 0)
    return [];

  let arr = list.getNodes();

  stack.push(arr[0]);
  visited.add(arr[0]);

  while (!stack.isEmpty()) {
    console.log('stack', stack);
    console.log('visited', visited);

    let removed = stack.pop();
    let neighbors = list.getNeighbors(removed);
    let neighborValues = neighbors.map((ne) => ne.node.value);

    neighborValues.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    });
  }
  return Array.from(visited);
};

module.exports = depthFirst;
