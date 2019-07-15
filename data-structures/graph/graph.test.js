const Graph = require('./graph');

describe('The Graph Function', () => {
  let _test = new Graph();
  let firstNode = _test.addNode('first');
  let secondNode = _test.addNode('second');

  it('should add a new node to graph', () => {
    let testGraph = new Graph();

    let result = testGraph.addNode('hello');
    expect(result.value).toBe('hello');
  });

  it('should add edges to a given node', () => {
    _test.addEdge('first', 'second');
    expect(firstNode.edges).toHaveLength(1);
    expect(secondNode.edges).toHaveLength(1);
    expect(firstNode.edges[0].node.value).toBe('second');
  });

  it('should return a list of all nodes', () => {
    let allNodes = _test.getNodes();
    expect(allNodes).toEqual(['first', 'second']);
  });

  it('should return all nodes that are neighboring a specific node', () => {
    let neighbors = _test.getNeighbors('first');
    console.log(neighbors);
    expect(neighbors).toBeDefined();
  });

  it('should return size of the graph', () => {
    let result = _test.size();
    expect(result).toBe(2);
  });
});
