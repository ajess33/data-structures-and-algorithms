const AnimalShelter = require('./fifo-animal-shelter');

describe('The AnimalShelter Module', () => {
  it('should be instantianted an empty queue', () => {
    const shelter = new AnimalShelter();
    expect(shelter).toBeDefined();
    expect(shelter.first).toBeNull();
    expect(shelter.tail).toBeNull();
  });

  it('should return the animal thats been in line longest if preference isnt specified', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    expect(shelter.dequeue()).toBe('cat');
  });

  it('should correctly enqueue an animal to the back of the list', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    expect(shelter.first.value).toBe('cat');
    shelter.enqueue('dog');
    expect(shelter.first.value).toBe('cat');
    expect(shelter.tail.value).toBe('dog');
  });

  it('should dequeue off the preferred animal if pref is passed in', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    expect(shelter.dequeue('dog')).toBe('dog');
  });
});
