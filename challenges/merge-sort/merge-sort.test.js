const mergeSort = require('./merge-sort');

xdescribe('The Merge Sort Function', () => {
  it('should return an empty array if the input array is empty', () => {
    const arr = [];
    expect(mergeSort(arr)).toEqual([]);
  });

  it('should return a sorted array for a valid array', () => {
    const arr = [10, 30, 2, 5, 1, 11, 43, 31, 3];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 5, 10, 11, 30, 31, 43]);
  });

  it('should return a sorted array for a valid array', () => {
    const arr = [2, 1];
    expect(mergeSort(arr)).toEqual([1, 2]);
  });
});
