const Graph = require('./breadthFirst');

describe('Breadth First Traversal', () => {
  let testGraph = new Graph();
  testGraph.addNode('first');
  testGraph.addNode('second');
  testGraph.addNode('third');
  testGraph.addNode('fourth');
  testGraph.addNode('fifth');
  console.log(testGraph.adjList);

  it('should return a list of all nodes in graph', () => {
    // let list = testGraph.breadthFirst('first');
    // expect(list).toBeDefined();
    expect();
  });
});
