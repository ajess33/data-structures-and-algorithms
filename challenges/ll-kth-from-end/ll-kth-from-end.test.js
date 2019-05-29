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
