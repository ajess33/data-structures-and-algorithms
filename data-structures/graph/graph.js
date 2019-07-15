class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(value) {
    if (!this.adjList[value]) {
      let newNode = new Node(value);
      this.adjList.set(value, newNode);
      return newNode;
    }
    return `Duplicate!`;
  }

  addEdge(v1, v2, weight = 1) {
    v1 = this.adjList.get(v1);
    v2 = this.adjList.get(v2);
    if (!v1 || !v2) return `Please return two nodes!`;
    v1.edges.push({ node: v2, weight });
    v2.edges.push({ node: v1, weight });
  }

  getNodes() {
    return Array.from(this.adjList.keys());
  }

  getNeighbors(value) {
    let node = this.adjList.get(value);
    let neighbors = node.edges;
    return neighbors;
  }

  size() {
    let arr = this.getNodes();
    return arr.length;
  }
}

module.exports = Graph;
