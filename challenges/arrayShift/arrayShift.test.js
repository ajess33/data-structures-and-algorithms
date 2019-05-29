const insertShiftArray = (arr, val) => {
  if (!Array.isArray(arr)) {
    return 'Not an array';
  } else if (arr.length === 0) {
    return [val];
  }
  const middleIndex = Math.ceil(arr.length / 2);
  let result = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (middleIndex > i) {
      result[i] = arr[i];
    } else if (middleIndex < i) {
      result[i] = arr[i - 1];
    } else {
      result[middleIndex] = val;
    }
  }
  return result;
};

xdescribe('The input array', () => {
  it('is not an array', () => {
    expect(insertShiftArray({}, 6)).toBe('Not an array');
  });

  it('is empty', () => {
    expect(insertShiftArray([], 4)).toEqual([4]);
  });

  it('has an even length', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });

  it('has an odd length', () => {
    expect(insertShiftArray([1, 2, 3], 5)).toEqual([1, 2, 5, 3]);
  });
});
