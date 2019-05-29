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
  insertBefore(searchValue, valueToAdd) {
    let current;
    const newNode = new Node(valueToAdd);

    // loop through
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      current = this.head;
      while (current) {
        console.log(current);
        if (current.value === searchValue) {
          let previous = current;
          current = newNode;
          current.next = previous;
        }
      }
    }
  }

  // add node immediately AFTER the selected node index
  insertAfter(searchValue, valueToAdd) {
    // loop through
    // if current.val = passed val
    // new Node -> next equals current.next
    // current.next -> new Node
    let current;
    const newNode = new Node(valueToAdd);

    // loop through
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      current = this.head;
      while (current.value !== searchValue) {
        current = current.next;
      }
      console.log('outside of while loop now');
      let previous = current;
      current = newNode;

      current.next = previous;
    }
  }

  delete(value) {
    if (!this.head) {
      return `You have nothing in your linked list`;
    } else {
      let previous = this.head;
      let current = previous.next;
      while (current) {
        if (current.value === value) {
          previous.next = current.next;
          current = current.next;
          break;
        } else {
          previous = current;
          current = current.next;
        }
      }
    }
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
listTest.insert('second value');

xdescribe('The linked list', () => {
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
    expect();
  });

  it('should insert a node before a specified index', () => {
    listTest.insert('third value');
    listTest.insert('fourth value');
    listTest.insertBefore('first value', 'Should be the 2nd value in list');
    console.log();
  });

  it('should insert a node after a specified index', () => {
    const myLinkedList = new LinkedList();
    myLinkedList.insert('first insert');
    myLinkedList.insert('second insert');
    myLinkedList.insertAfter('first insert', 'Inserted after!');
  });

  it('should delete a node with a specific value from the linked list', () => {
    listTest.delete('first value');
    expect(listTest.includes('first value')).toBeFalsy();
  });
});
