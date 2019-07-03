class HashTable {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  add(key, value) {
    // takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as need
  }

  get(key) {
    // takes in the key and returns the value from the table.
  }

  contains(key) {
    // takes in the key and returns a boolean, indicating if the key exists in the table already.
  }

  hash() {
    // takes in an arbitrary key and returns an index in the collection.
  }
}

module.exports = HashTable;
