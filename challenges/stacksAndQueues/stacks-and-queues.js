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

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (!value) {
      return `You must pass in a value to add`;
    }

    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  enqueueMultiple(arr) {
    if (!arr) {
      return `You must pass in a value to add`;
    }

    arr.forEach((value) => {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    });
  }

  dequeue() {
    if (!this.head) return `Nothing in queue`;

    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    return temp.value;
  }

  peek() {
    if (!this.head) {
      return `Nothing in queue`;
    }
    return this.head.value;
  }
}

module.exports = { Stack, Queue };
