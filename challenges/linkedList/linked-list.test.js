// Define a PRINT method that returns a collection of all the nodes

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    console.log('Added Node!');
  }

  includes(searchQuery) {
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

  // print() {

  // }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TESTS
// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

describe('The linked list', () => {
  it('instantiates an empty array to begin', () => {
    const myLinkedList = new LinkedList();
    expect(myLinkedList).toBeDefined();
  });

  it('should have the ability to add new nodes to the head', () => {
    const newList = new LinkedList();
    newList.insert('this is my value');
    console.log(newList);
    expect(newList.head.value).toBe(`this is my value`);
  });

  it('should add new nodes to head if head is not node', () => {
    const list1 = new LinkedList();
    list1.insert('first value!');
    list1.insert('second value!');
    expect(list1.head.value).toBe('second value!');
  });

  it('should return a value if you run the includes method', () => {
    const list = new LinkedList();
    list.insert('first value');
    list.insert('second value');
    expect(list.includes('second value')).toBe(true);
  });
});
