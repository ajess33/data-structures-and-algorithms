const HashTable = require('../../data-structures/hash-table/hashtable');
const leftJoin = require('./left-join');

describe('The LeftJoin Function', () => {
  it('should return a left join from two hashmaps', () => {
    let result = leftJoin(hash1, hash2);
    expect(result).toEqual([
      ['fond', 'enamoured', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['outfit', 'garb', null]
    ]);
  });
});

let hash1 = new HashTable();
hash1.add({ fond: 'enamoured' });
hash1.add({ wrath: 'anger' });
hash1.add({ outfit: 'garb' });
let hash2 = new HashTable();
hash2.add({ fond: 'averse' });
hash2.add({ wrath: 'delight' });
hash2.add({ dog: 'good' });
