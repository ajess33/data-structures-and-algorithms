class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (!value) {
      return `You must pass in a value to add`;
    }

    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pushMultiple(arr) {
    if (!arr) {
      return `You must pass in at least two values`;
    }

    arr.forEach((value) => {
      const newNode = new Node(value);
      if (!this.top) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    });
  }

  pop() {
    if (!this.top) {
      return `You dont have anything in your stack!`;
    }

    let removedNode = this.top;
    this.top = this.top.next;
    removedNode.next = null;
    return removedNode.value;
  }

  peek() {
    if (!this.top) {
      return `You dont have anything in your stack!`;
    }

    return this.top.value;
  }
}

class PseudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    const newNode = new Node(value);
    let temp = this.s1.top;
    this.s1.top = newNode;
    this.s1.top.next = temp;
  }

  dequeue() {
    // loop through s1 pop and push values to s2

    if (!this.s1.top) {
      return `You dont have anything in your stack!`;
    }

    let current = this.s1.top;
    while (current) {
      let poppedNode = this.s1.pop();
      this.s2.push(poppedNode);
      current = current.next;
    }
    const offTheStack = this.s2.pop();
    current = this.s2.top;
    while (current) {
      let poppedNode = this.s2.pop();
      this.s1.push(poppedNode);
      current = current.next;
    }
    return offTheStack;
  }
}

module.exports = PseudoQueue;
