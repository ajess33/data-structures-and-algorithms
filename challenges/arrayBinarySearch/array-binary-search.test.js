const binarySearch = (arr, val) => {
  if (!Array.isArray(arr)) {
    return `You need to pass in an array in order to do a binary search`;
  } else if (arr.length === 1) {
    return 'Cannot do a binary search on one element';
  }

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.ceil((start + end) / 2);
  let loopGuard = 0;

  while (arr[mid] !== val && loopGuard++ < 1000) {
    if (start === end - 1 && (start !== val && end !== val)) {
      return -1;
    } else if (arr[mid] > val) {
      end = mid - 1;
      mid = Math.ceil((start + end) / 2);
    } else if (arr[mid] < val) {
      start = mid + 1;
      mid = Math.ceil((start + end) / 2);
    }
  }
  return mid;
};

let testArray = [];
for (let i = 0; i < 10000; i++) {
  testArray.push(i);
}

describe('The binary search function', () => {
  it('should return an index if it finds a match', () => {
    expect(binarySearch([0, 1, 2, 3, 4, 5], 1)).toBe(1);
  });

  it('should return an index for an array of any length', () => {
    expect(binarySearch(testArray, 4)).toBe(4);
  });

  it('should return a message if array is of length 1', () => {
    expect(binarySearch([1], 1)).toBe(
      `Cannot do a binary search on one element`
    );
  });

  it(`should return a message if array isn't passed in`, () => {
    expect(binarySearch(1, 1)).toBe(
      `You need to pass in an array in order to do a binary search`
    );
  });
});
