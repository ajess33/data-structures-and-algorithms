# Lecture Notes - Insertion Sort

![Insertion Sort Visualized](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/insertionsort.png)

Insertion sort is a type of sorting algorithm. It is not as performant as most of the other sorting methods like, quick sort and merge sort for example.

### Learning Objectives

- Be able to implement an insertion sort on an array
- Be able to explain the performance compared to other sorting algorithms

### Lecture Flow

- Divides the array into 2 parts

  - sorted and unsorted

- Performance
  - Not as fast as a quick sort or a merge sort unless the array is almost sorted or it is very small
  - Average Case: O (n^2)

### Pseudocode

```
for (let i = 0; i < arr.length; i++) {
j = i - 1
temp = arr[i]
while(j >= 0 && temp < arr[j]) {
arr[j + 1] = arr[j]
j = j + 1
}
arr[j + 1] = temp
}
return arr
```

### Readings and References

#### Watch

- https://www.youtube.com/watch?v=ArPCGZRXXc0

#### Read

- https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
- https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg
