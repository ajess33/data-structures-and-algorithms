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
    return removedNode;
  }

  peek() {
    if (!this.top) {
      return `You dont have anything in your stack!`;
    }

    return this.top.value;
  }
}

module.exports = Stack;
