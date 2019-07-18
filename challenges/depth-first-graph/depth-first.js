const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const depthFirst = (list) => {
  let stack = new Stack();
  let visited = new Set();

  if (list.size() === 0) {
    throw `No Graph`;
  }

  let arr = list.getNodes();

  stack.push(arr[0]);
  visited.add(arr[0]);

  while (!stack.isEmpty()) {
    let removed = stack.pop();
    let neighbors = list.getNeighbors(removed);
    // console.log('REMOVED', neighbors[0].node.value);
    neighbors = neighbors.map((ne) => ne.node.value);
    console.log(neighbors);
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    });
  }
  console.log(visited);
  return Array.from(visited);
};

module.exports = depthFirst;
