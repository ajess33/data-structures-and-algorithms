class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  findFromEnd(k) {
    if (this.length > k && this.length > 0 && k > -1) {
      let current = this.head;
      for (let i = 0; i < this.length - k - 1; i++) {
        current = current.next;
      }
      return current.value;
    }
    return `K was not found`;
  }

  findFromMiddle() {
    if (this.length !== 0) {
      let current = this.head;
      const middle = Math.ceil((this.length - 1) / 2);
      for (let i = 0; i < middle; i++) {
        current = current.next;
      }
      return current.value;
    }
    return `Invalid List`;
  }

  insertMany(arr) {
    if (!arr) {
      return `You must input an array consisting of at least one value`;
    }
    arr.forEach((value) => {
      const newNode = new Node(value);
      this.length++;
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
    this.length++;
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
    this.length++;

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
    this.length++;

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
    this.length++;

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
          this.length--;
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

const list = new LinkedList();
list.insert('first');
list.insert('second');
list.insert('third');
describe('The Linked List', () => {
  it('should have a length property', () => {
    expect(list.length).toBe(3);
  });

  it('should return the value of the kth index from the end of the list', () => {
    console.log(list);
    expect(list.findFromEnd(2)).toBe('third');
  });

  it('should return an error if k was not found', () => {
    expect(list.findFromEnd(10)).toBe('K was not found');
  });

  it('should return an error if k is a negative number', () => {
    expect(list.findFromEnd(-3)).toBe('K was not found');
  });

  it('should return the value of the kth index in a list of one node', () => {
    const list1 = new LinkedList();
    list1.insert('first');
    expect(list1.findFromEnd(0)).toBe('first');
  });

  it('should return the value of the kth index if that index is near the middle', () => {
    expect(list.findFromEnd(1)).toBe('second');
  });

  it('should return the value from the middle of a list', () => {
    console.log(list);
    expect(list.findFromMiddle()).toBe('second');
  });
});
