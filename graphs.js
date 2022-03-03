class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

new Node(2); //?

// adjacency matrix
// 2d structure with nested arrays with rows and columns like an sql table or excel

//

/**
 * adjacency list
 *
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vert1, vert2){
    if(this.adjacencyList[vert1]) this.adjacencyList[vert1].push(vert2)
    if(this.adjacencyList[vert2]) this.adjacencyList[vert2].push(vert1)
  }
  removeEdge(vert1, vert2){
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2)
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1)
  }
  removeVertex(vert) {
    this.adjacencyList[vert] 
    while(this.adjacencyList[vert].length){
      const adjVert = this.adjacencyList[vert].pop()
      this.removeEdge(vert, adjVert)
    }
    delete this.adjacencyList[vert]
  }

  
  
}

let testGraph = new Graph()
testGraph.addVertex('vert')
testGraph.addVertex('tester')
testGraph.addVertex('tester2')
testGraph.addEdge('vert', 'tester') 
testGraph.addEdge('vert2', 'tester2') 
// testGraph.removeEdge('vert', 'tester')
testGraph.removeVertex('vert')

testGraph