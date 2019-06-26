# Lecture Notes - Quick Sort

Quick sort is a type of sorting algorithm. Similar to merge sort, it is a divide and conquer sorting algorithm

![Quick Sort Visualized](https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png)

### Learning Objectives

- Be able to implement an quick sort on an array
- Be able to explain the performance compared to other sorting algorithms

### Lecture Flow

- It picks an element as pivot and partitions the given array around the picked pivot.

  1. Always pick first element
  2. Always pick last element
  3. Pick random element
  4. Pick median as pivot

- The `partition()` function is the key to the quick sort algorithm

  - If 'x' is pivot, put x in correct place and all smaller elements before it. All bigger elements should go after.

- Performance
  - Preferred for sorting an array
  - Best case: O(n Log n)
  - Worst case: O(n^2)

### Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

### Readings and References

#### Watch

- https://www.youtube.com/watch?v=COk73cpQbFQ

#### Read

- https://www.guru99.com/quicksort-in-javascript.html
- https://khan4019.github.io/front-end-Interview-Questions/sort.html
