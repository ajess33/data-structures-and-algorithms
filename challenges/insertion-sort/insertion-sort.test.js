const insertionSort = require('./insertion-sort');

describe('The insertionSort Function', () => {
  it('should return an array sorted in ascending order', () => {
    let arr = [10, 4, 3, 8, 1, 29];
    expect(insertionSort(arr)).toEqual([1, 3, 4, 8, 10, 29]);
  });
});
