const reverseArray = (array) => {
  if (!Array.isArray(array)) {
    return 'Not an array';
  } else if (array.length === 0) {
    return [];
  } else {
    let count = 0;
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result[count] = array[i];
      count++;
    }
    return result;
  }
};

const newReverseArray = (array) => {
  if (!Array.isArray(array)) {
    return 'Not an array';
  } else if (array.length === 0) {
    return [];
  } else {
    let result = [];
    array.forEach((el) => {
      result.unshift(el);
    });
    return result;
  }
};

describe('empty array should return an empty array', () => {
  it('array is empty', () => {
    expect(newReverseArray([])).toHaveLength(0);
  });
});

describe('input value should be an array', () => {
  it('input value is not an array', () => {
    expect(newReverseArray({})).toEqual('Not an array');
  });
});
