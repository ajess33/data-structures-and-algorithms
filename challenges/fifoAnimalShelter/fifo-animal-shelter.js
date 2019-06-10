class Node {
  constructor(type) {
    this.value = type;
    this.next = null;
    this.prev = null;
  }
}

class AnimalShelter {
  constructor() {
    this.length = 0;
    this.first = null;
    this.tail = null;
  }

  enqueue(animal) {
    if (!animal) return `You must input a value!`;
    const newAnimal = new Node(animal);
    if (!this.first) {
      this.first = newAnimal;
      this.tail = newAnimal;
    } else {
      this.tail.next = newAnimal;
      newAnimal.prev = this.tail;
      this.tail = newAnimal;
    }
    this.length++;
  }

  dequeue(pref) {
    if (!pref) return this.first.value;
    let current = this.first;
    while (current) {
      console.log(current.value);
      if (current.value === pref) {
        if (current.next) {
          current.next.previous = current.previous;
          if (current.prev) {
            current.prev.next = current.next;
          }
          return current.value;
        } else {
          current.prev.next = null;
          return current.value;
        }
      }
      current = current.next;
    }
    this.length--;
  }
}

module.exports = AnimalShelter;
