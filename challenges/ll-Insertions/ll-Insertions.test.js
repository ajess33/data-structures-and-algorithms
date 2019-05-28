class LinkedList {
  constructor() {
    this.head = null;
  }

  insertMany(arr) {
    if (!arr) {
      return `You must input an array consisting of at least one value`;
    }
    arr.forEach((value) => {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    });
  }

  insert(value) {
    if (!value) {
      return `You must input a value`;
    }
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // add node to END of list
  append(value) {
    let current;
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      // loop through
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // add node immediately BEFORE the selected node index
  insertBefore(value, location) {
    // loop through
    // if next.val = passed val
    // new node -> next = current.next
    // current.next = new Node
  }

  // add node immediately AFTER the selected node index
  insertAfter(value, location) {
    // loop through
    // if current.val = passed val
    // new Node -> next equals current.next
    // current.next -> new Node
  }

  delete(value) {
    // if next.val = passed val
    // next = next.next
  }

  includes(searchQuery) {
    if (!searchQuery) {
      return `You must input a search query`;
    }
    let current = this.head;

    while (current) {
      if (current.value === searchQuery) {
        return true;
      } else {
        current = current.next;
        return false;
      }
    }
  }

  print() {
    if (!this.head) {
      return `You have to insert a node first!`;
    } else {
      let current = this.head;
      let stringNodes = '';
      while (current) {
        stringNodes += current.value + ' ';
        current = current.next;
      }
      return stringNodes;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
TESTS
1. Can successfully add a node to the end of the linked list
2. Can successfully add multiple nodes to the end of a linked list
3. Can successfully insert a node before a node located i the middle of a linked list
4. Can successfully insert a node before the first node of a linked list
5. Can successfully insert after a node in the middle of the linked list
6. Can successfully insert a node after the last node of the linked list
*/

const listTest = new LinkedList();
listTest.insert('first value');

describe('The linked list', () => {
  const list = new LinkedList();
  list.insert('first value');
  list.insert('second value');
  list.insert('third value');

  it('instantiates an empty array to begin', () => {
    const myLinkedList = new LinkedList();
    expect(myLinkedList).toBeDefined();
  });

  // FINISH THIS
  it('should insert a node at the end of the linked list', () => {
    listTest.append('last value in list');
    console.log(listTest);
    expect();
  });
});
