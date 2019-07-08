const LinkedList = require('../linkedList/linked-list.test');

class HashTable {
  constructor(count) {
    this.storage = [];
    this.bucketCount = count || 1024;
  }

  add(obj) {
    // takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as need
    if (!obj) return `Please provide and object`;
    let index = this.hash(Object.keys(obj)[0]);
    if (!this.storage[index]) {
      this.storage[index] = new LinkedList();
    }
    // insert is from linkedlist constructor
    this.storage[index].insert(obj);
    return this.storage[index].head;
  }

  get(key) {
    // takes in the key and returns the value from the table.
    console.log(key);
    if (!key) return `Please provide a key`;
    let current;
    let index = this.hash(key);
    if (this.storage[index].head) {
      current = this.storage[index].head;
    } else {
      current = null;
    }
    while (current) {
      if (current.value[key]) return current.value;
      current = current.next;
    }
    return current;
  }

  contains(key) {
    if (!key) return `Please provide a key`;
    let value = this.get(key);
    if (!value) {
      return false;
    }
    return true;
  }

  hash(key) {
    if (!key) return `Please provide a key`;
    if (typeof key !== 'string') {
      key = JSON.stringify(key);
    }
    let hash = key
      .split('')
      .map((char) => char.charCodeAt(0))
      .reduce((acc, cur) => acc + cur);
    return Math.floor((hash * 599) / this.bucketCount);
  }
}

module.exports = HashTable;
