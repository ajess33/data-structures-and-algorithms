class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertMany(arr) {
    if (!arr) {
      return `You must input an array consisting of at least one value`;
    }
    arr.forEach((value) => {
      this.length++;
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
    this.length++;
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
    this.length++;
  }

  // add node immediately BEFORE the selected node index
  insertBefore(searchValue, valueToAdd) {
    let current;
    let previous;
    const newNode = new Node(valueToAdd);

    // loop through
    if (!this.head) {
      this.head = newNode;
      this.length++;

      return;
    } else {
      current = this.head;
      while (current.value !== searchValue) {
        current = current.next;
      }
      previous = current;
      current = newNode;
      current.next = previous.next;
      this.length++;
    }
  }

  // add node immediately AFTER the selected node index
  insertAfter(searchValue, valueToAdd) {
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
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
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
    const newList = new LinkedList();
    newList.insert('first value');
    newList.insert('second value');
    newList.insertBefore('first value', 'Should be the 2nd value in list');
    console.log(newList);
    expect(newList.length).toBe(3);
  });

  it('should insert a node after a specified index', () => {
    const myLinkedList = new LinkedList();
    myLinkedList.insert('first insert');
    myLinkedList.insert('second insert');
    myLinkedList.insertAfter('first insert', 'Inserted after!');
    expect(myLinkedList.length).toBe(3);
  });

  it('should delete a node with a specific value from the linked list', () => {
    listTest.delete('first value');
    expect(listTest.includes('first value')).toBeFalsy();
  });
});
