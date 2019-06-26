const quickSort = require('./quick-sort');

describe('The Quick Sort Function', () => {
  it('should sort an array', () => {
    let arr = [14, 7, 3, 1, 17, 20, 11, 12];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([
      1,
      3,
      7,
      11,
      12,
      14,
      17,
      20
    ]);
  });

  it('should sort an array with identical values', () => {
    let arr = [3, 5, 2, 4, 3, 3];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([2, 3, 3, 3, 4, 5]);
  });

  it('should return an empty array if an empty array is passed in', () => {
    let arr = [];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([]);
  });
});
