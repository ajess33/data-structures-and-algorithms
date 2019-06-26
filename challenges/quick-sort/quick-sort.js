const quickSort = (arr, left, right) => {
  if (left < right) {
    let position = partition(arr, left, right);
    // sort left
    quickSort(arr, left, position - 1);
    // sort right
    quickSort(arr, position + 1, right);
  }
  return arr;
};

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low) {
  [arr[i], arr[low]] = [arr[low], arr[i]];
  // let temp = arr[i];
  // arr[i] = arr[low];
  // arr[low] = temp;
}

module.exports = quickSort;
