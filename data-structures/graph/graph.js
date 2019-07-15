const { Queue } = require('../../challenges/stacksAndQueues/stacks-and-queues');

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(value) {
    this.nodes.push(value);
    this.edges.node = [];
    return value;
  }

  addEdge(node1, node2, weight = 1) {
    if (!node1 || !node1) return `Please input two nodes`;
    //Adds a new edge between two nodes in the graph
    //Include the ability to have a “weight”
    //Takes in the two nodes to be connected by the edge
    //Both nodes should already be in the Graph
    this.edges[node1].push({ node: node2, weight });
    this.edges[node2].push({ node: node1, weight });
  }

  addDirectedEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight });
  }

  getNodes() {
    //Returns all of the nodes in the graph as a collection (set, list, or similar)
    let result = '';
    this.nodes.forEach((node) => {
      result += ` ${node}`;
    });
    result = result.split(' ');
    result.shift();
    return result;
  }

  getNeighbors() {
    //Returns a collection of nodes connected to the given node
    //Takes in a given node
    //Include the weight of the connection in the returned collection
  }

  size() {
    //Returns the total number of nodes in the graph
    if (this.nodes.length === 0) return null;
    return this.nodes.length;
  }
}

module.exports = Graph;
