const HashTable = require('./hashtable');

xdescribe('The HashTable Class', () => {
  it('can produce a hash code', () => {
    let testTable = new HashTable(1024);

    expect(testTable.hash('cat')).toBe(182);
    expect(testTable.hash('austin')).toBe(386);
    expect(testTable.hash()).toBe(`Please provide a key`);
  });

  it('can add an object to the hash table', () => {
    let testTable = new HashTable(1024);
    let test = testTable.add({ cat: 100 });
    expect(test.value).toEqual({ cat: 100 });
  });

  it('can get an object from the hash table', () => {
    let testTable = new HashTable(1024);
    testTable.add({ cat: 100 });
    expect(testTable.get('cat')).toEqual({ cat: 100 });
  });

  it('returns a boolean referencing if the key is in the table or not', () => {
    let testTable = new HashTable();
    testTable.add({ dog: 100 });
    expect(testTable.contains('dog')).toBeTruthy();
  });
});
