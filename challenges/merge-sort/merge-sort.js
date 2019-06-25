const mergeSort = (arr) => {
  let len = arr.length;
  if (len > 1) {
    let mid = len / 2;
    let b = arr.slice(0, mid);
    let c = arr.slice(mid, len + 1);

    mergeSort(b);
    mergeSort(c);
    return merge(b, c, arr);
  } else {
    return [];
  }
};

function merge(b, c, a) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < b.length && j < c.length) {
    if (b[i] <= c[j]) {
      a[k] = b[i];
      i = i + 1;
    } else {
      a[k] = c[j];
      j = j + 1;
    }
    k = k + 1;
  }
  console.log('merged', a, i, j);
  // use a[k] too add to array
  if (i === b.length) {
    // a.push(...c.slice(j));
    a[k] = c[j];
  } else {
    // a.push(...b.slice(i));
    a[k] = b[i];
  }
  return a;
}

module.exports = mergeSort;
