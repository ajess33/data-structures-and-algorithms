const getEdges = require('./getEdge');
const Graph = require('../../data-structures/graph/graph');

describe('The getEdge function', () => {
  let testGraph = new Graph();
  popGraph(testGraph);

  it('should return true and the price for a direct path', () => {
    let result = getEdges(testGraph, [
      'California',
      'Nevada',
      'Iowa',
      'New York'
    ]);

    expect(result[0]).toBe(true);
    expect(result[1]).toBe(300);
  });

  it('should return false and 0 for a path that is not direct', () => {
    let result = getEdges(testGraph, ['California', 'Iowa']);

    expect(result).toEqual([false, 0]);
  });
});

/*
{
  California: Nevada
  Nevada: Texas, Iowa
  Iowa: Texas, New York
  Texas: Nevada, Iowa, New York
  New York:
}

*/

function popGraph(testGraph) {
  testGraph.addNode('California');
  testGraph.addNode('Iowa');
  testGraph.addNode('Nevada');
  testGraph.addNode('New York');
  testGraph.addNode('Texas');
  testGraph.addEdge('California', 'Nevada', 50);
  testGraph.addEdge('Nevada', 'Iowa', 100);
  testGraph.addEdge('Iowa', 'New York', 150);
  testGraph.addEdge('Nevada', 'Texas', 70);
  testGraph.addEdge('Texas', 'New York', 100);
  testGraph.addEdge('Iowa', 'Texas', 50);
}
