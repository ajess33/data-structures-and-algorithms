const HashTable = require('../../data-structures/hash-table/hashtable');

const repeatedWord = (str) => {
  const hashTable = new HashTable();
  let firstDup = null;
  let counts = {};
  let frequent = [];

  str.split(' ').forEach((word) => {
    word = word.toLowerCase().replace(',', '');
    if (!firstDup && hashTable.contains(word)) {
      firstDup = word;
    }

    const value = {};
    value[word] = word;
    hashTable.add(value);
    counts[word] ? (counts[word] += 1) : (counts[word] = 1);

    for (let word in counts) {
      frequent.push({ [word]: counts[word] });
    }
    frequent = frequent.sort((a, b) => Object.values(b) - Object.values(a));
  });
  frequent = frequent.slice(0, 3);
  return { firstDup, counts, frequent };
};

module.exports = repeatedWord;
