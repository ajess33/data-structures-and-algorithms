# Shift an Array

## Challenge

Insert and shift an array in middle at index

## Approach & Efficiency

Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index

## Solution

`const insertShiftArray = (arr, val) => { if (!Array.isArray(arr)) { return 'Not an array'; } else if (arr.length === 0) { return [val]; } const middleIndex = Math.ceil(arr.length / 2); let result = []; for (let i = 0; i < arr.length + 1; i++) { if (middleIndex > i) { result[i] = arr[i]; } else if (middleIndex < i) { result[i] = arr[i - 1]; } else { result[middleIndex] = val; } } return result; };`
