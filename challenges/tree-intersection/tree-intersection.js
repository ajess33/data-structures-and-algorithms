const HashTable = require('../../data-structures/hash-table/hashtable');
// const Tree = require('../../data-structures/trees/tree');

const treeIntersection = (tree1, tree2) => {
  const hashTable = new HashTable();

  let tree1Arr = tree1.inOrder();
  let tree2Arr = tree2.inOrder();

  tree1Arr.forEach((value) => {
    if (tree2Arr.includes(value) && !hashTable.contains(value)) {
      hashTable.add({ [value]: null });
    }
  });

  // tree1Arr.forEach((value) => checkForContainsAndAdd(value, hashTable, result));
  // tree2Arr.forEach((value) => checkForContainsAndAdd(value, hashTable, result));

  return hashTable;
};

// loop through first tree, if the second tree includes it and the hashTable does not contain the value, add it to the hashtable

// function checkForContainsAndAdd(value, hashTable, result) {
//   hashTable.contains(value)
//     ? result.push(value)
//     : hashTable.add({ [value]: null });
//   console.log(hashTable);
//   console.log(result);
// }

module.exports = treeIntersection;
