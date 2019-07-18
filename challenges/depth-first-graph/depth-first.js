const { Stack } = require('../stacksAndQueues/stacks-and-queues');

const depthFirst = (list) => {
  let stack = new Stack();
  let visited = new Set();

  let arr = list.getNodes();

  stack.push(arr[0]);
  visited.add(arr[0]);

  while (!stack.isEmpty()) {
    let removed = stack.pop();
    let neighbors = list.getNeighbors(removed);
    // console.log('REMOVED', neighbors[0].node.value);
    neighbors = neighbors.map((ne) => ne.node.value);
    console.log(neighbors);
    if (!visited.has(neighbors)) {
      visited.add(neighbors);
      stack.push(neighbors[0]);
    }
  }
  console.log(visited);
  return visited;
};

module.exports = depthFirst;
