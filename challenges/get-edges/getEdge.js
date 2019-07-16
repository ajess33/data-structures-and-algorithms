// example arr
// ['California', 'Texas', 'New York']

const getEdges = (graph, arr) => {
  let totalPrice = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let firstNode = graph.adjList.get(arr[i]);
    let neighbors = graph.getNeighbors(firstNode.value);
    let next = neighbors.find((node) => {
      return node.node.value === arr[i + 1];
    });
    if (!next) {
      return [false, 0];
    }
    totalPrice += next.weight;
  }
  return [true, totalPrice];
};

module.exports = getEdges;
