# Array Binary Search

## Challenge

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

No built-in methods. Use a while loop to check if the value isn't equal the mid variable

## Solution

`const binarySearch = (arr, val) => { if (!Array.isArray(arr)) { return`You need to pass in an array in order to do a binary search`;
} else if (arr.length === 1) {
return 'Cannot do a binary search on one element';
}

let start = 0;
let end = arr.length - 1;
let mid = Math.ceil((start + end) / 2);
let loopGuard = 0;

while (arr[mid] !== val && loopGuard++ < 1000) {
if (start === end - 1 && (start !== val && end !== val)) {
return -1;
} else if (arr[mid] > val) {
end = mid - 1;
mid = Math.ceil((start + end) / 2);
} else if (arr[mid] < val) {
start = mid + 1;
mid = Math.ceil((start + end) / 2);
}
}
return mid;
};
`
