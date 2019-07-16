const Graph = require('./breadthFirst');

describe('Breadth First Traversal', () => {
  let testGraph = new Graph();
  testGraph.addNode('first');
  testGraph.addNode('second');
  testGraph.addNode('third');
  testGraph.addNode('fourth');
  testGraph.addNode('fifth');
  testGraph.addEdge('first', 'second');
  testGraph.addEdge('second', 'third');
  testGraph.addEdge('third', 'fourth');
  testGraph.addEdge('fifth', 'second');

  it('should return a list of all nodes in graph', () => {
    testGraph.breadthFirst('first');
    console.log(testGraph.breadthFirst('first'));
    // console.log('LIST: ', list);
    expect().toBeDefined();
    expect();
  });
});
