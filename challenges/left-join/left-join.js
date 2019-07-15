const leftJoin = (hash1, hash2) => {
  let result = [];

  for (let value of hash1.storage) {
    if (value !== undefined) {
      result.push([
        Object.keys(value.head.value)[0],
        Object.values(value.head.value)[0]
      ]);
    }
  }
  for (let index of hash2.storage) {
    if (index !== undefined) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].includes(Object.keys(index.head.value)[0])) {
          result[i].push(Object.values(index.head.value)[0]);
        }
      }
    }
  }
  return result.map((row) => (row.length < 3 ? row.concat([null]) : row));
};
module.exports = leftJoin;
