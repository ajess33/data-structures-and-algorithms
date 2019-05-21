# Reverse an Array

Given an array as input, return a new array with all of the elements in reverse order.

## Challenge

Achieve solution without using built-in methods

## Approach & Efficiency

I used a for loop to traverse array starting from the end of the array.

## Solution

`const reverseArray = (array) => { if (!array.isArray()) { return 'Not an array'; } else if (array.length === 0) { return []; } else { let count = 0; let result = []; for (let i = array.length - 1; i >= 0; i--) { result[count] = array[i]; count++; } return result; } };`
