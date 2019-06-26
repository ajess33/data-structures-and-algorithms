# Lecture Notes - Merge Sort

Merge sort is a type of sorting algorithm. It will take in an array to sort and return the sorted array, In ascending order.

![Merge Sort Visualized](https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png)

### Learning Objectives

- Complete a working, tested implementation of Merge Sort
- Be able to explain the performance compared to other sorting algorithms

### Lecture Flow

- Divide and conquer type of algorithm

  - First, divide the array into equal halves and then combine them in a sorted manner

- Performance
  - Useful for sorting linked lists in **O(n Log n)** time
  - This is worst case run time

### Algorithm

1. If the array has only 1 element, the array is considered sorted
2. Divide the list **recursively** into 2 halves until it can't be divided anymore
3. Merge the smaller lists into list in sorted order

### Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if arr.length > 1
      DECLARE mid <-- n/2
      DECLARE b <-- arr[0...mid]
      DECLARE c <-- arr[mid...n]
      // break down the left side
      Mergesort(b)
      // break down the right side
      Mergesort(c)
      // merge the left and the right side together
      Merge(b, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1

        k <-- k + 1

    if i = b.length
       add remaining items in array c to array a
    else
       add remaining items in array b to array a

    return a
```

### Readings and References

#### Watch

- https://www.youtube.com/watch?v=TzeBrDU-JaY

#### Read

- https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
- https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/
