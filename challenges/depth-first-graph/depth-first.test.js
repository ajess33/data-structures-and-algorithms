const Graph = require('../../data-structures/graph/graph');
const depthFirst = require('./depth-first.js');

describe('The DepthFirst Function', () => {
  let test = new Graph();
  populateGraph(test);

  it('should return empty array for empty graph', () => {
    let graph = new Graph();
    let res = depthFirst(graph);
    expect(res).toEqual([]);
  });

  it('should return singleton array for island', () => {
    let graph = new Graph();
    graph.addNode('Austin');

    let res = depthFirst(graph);

    expect(res).toEqual(['Austin']);
  });

  it('should return doubleton array for simple graph', () => {
    let graph = new Graph();
    graph.addNode('Austin');
    graph.addNode('Rory');
    graph.addEdge('Austin', 'Rory');

    let res = depthFirst(graph);

    expect(res).toEqual(['Austin','Rory']);
  });

  it('should work for big graph', () => {
    let res = depthFirst(test);
    expect(res).toEqual([
      'A','B','E','F','C'
    ]);
  });
});

function populateGraph(test) {
  test.addNode('A');
  test.addNode('B');
  test.addNode('C');
  test.addNode('D');
  test.addNode('E');
  test.addNode('F');
  test.addEdge('A', 'B');
  test.addEdge('B', 'E');
  test.addEdge('B', 'F');
  test.addEdge('F', 'C');
}
