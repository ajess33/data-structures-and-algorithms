const HashTable = require('../../data-structures/hash-table/hashtable');

const treeIntersection = (tree1, tree2) => {
  const resultsHashTable = new HashTable();

  let tree1Arr = tree1.inOrder();
  let tree2Arr = tree2.inOrder();
  console.log(tree2Arr.length === 0);

  if (tree1Arr.length === 0 || tree2Arr.length === 0) {
    console.log('HERE!!!!!');
    return `Error. Empty tree`;
  }

  tree1Arr.forEach((value) => {
    if (tree2Arr.includes(value) && !resultsHashTable.contains(value)) {
      resultsHashTable.add({ [value]: null });
    }
  });

  // tree1Arr.forEach((value) => checkForContainsAndAdd(value, hashTable, result));
  // tree2Arr.forEach((value) => checkForContainsAndAdd(value, hashTable, result));

  return resultsHashTable;
};

module.exports = treeIntersection;
