const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  let mid = Math.ceil((start + end) / 2);

  while (arr[mid] !== val) {
    if (start === end - 1 && (start !== val && end !== val)) {
      return -1;
    } else if (arr[mid] > val) {
      console.log(start, mid, end);
      end = mid - 1;
      mid = Math.ceil((start + end) / 2);
    } else if (arr[mid] < val) {
      console.log(start, mid, end);

      start = mid + 1;
      mid = Math.ceil((start + end) / 2);
    }
  }
  return mid;
};

const testArray = [1, 3, 5, 7, 9, 11];

describe('The binary search function', () => {
  it('should return an index if it finds a match', () => {});
  expect(binarySearch([testArray], 3)).toBe(1);
});
