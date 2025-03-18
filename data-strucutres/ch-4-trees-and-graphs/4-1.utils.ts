export class GraphNode {
  value: number;
  adjacent: GraphNode[];

  constructor(value: number) {
    this.value = value;
    this.adjacent = [];
  }

  addEdge(node: GraphNode) {
    if (!this.adjacent.includes(node)) {
      this.adjacent.push(node);
    }
  }

  removeEdge(node: GraphNode) {
    this.adjacent = this.adjacent.filter((adj) => adj !== node);
  }

  hasEdge(node: GraphNode) {
    return this.adjacent.includes(node);
  }

  getNeighbors(): GraphNode[] {
    return this.adjacent;
  }
}

export class Queue<T> {
  arr: T[];

  constructor() {
    this.arr = [];
  }

  enqueue(value: T) {
    this.arr.push(value);
  }

  dequeue() {
    if (!this.isEmpty()) return this.arr.shift();
  }

  isEmpty() {
    return !this.arr.length;
  }
}
