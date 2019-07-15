const Graph = require('./graph');

describe('The Graph Function', () => {
  let _test = new Graph();
  _test.addNode('first');
  _test.addNode('second');

  it('should add a new node to graph', () => {
    let testGraph = new Graph();
    testGraph.addNode('hello');
    expect(testGraph.nodes).toHaveLength(1);
  });

  // it('should add edges to a given node', () => {
  //   _test.addEdge('first', 'second', (weight = 1));
  //   console.log(_test.edges);
  // });

  it('should return a list of all nodes', () => {
    expect(_test.getNodes()).toEqual(['first', 'second']);
  });

  it('should return size of the graph', () => {
    expect(_test.size()).toBe(2);
  });
});
