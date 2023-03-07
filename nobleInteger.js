function nobleInteger(A) {
  // Sort the array in descending order
  A.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    // Check if there are i elements greater than or equal to A[i]
    if (i === A[i]) {
      return 1;
    }
  }

  // If no such integer exists, return -1
  return -1;
}

// Example usage:
const A = [3, 2, 1, 3];
const result = nobleInteger(A);
console.log(result); // Output: 1


function nobleInteger(arr) {
  arr.sort((a, b) => a - b); // sort the array in ascending order
  for (let i = 0; i < arr.length; i++) {
    // check if the current number is a noble integer
    if (arr[i] === arr.length - i - 1 && arr[i] !== arr[i + 1]) {
      return 1;
    }
  }
  return -1; // no noble integer found
}

// example usage
const arr = [3, 2, 1, 3];
const result = nobleInteger(arr);
console.log(result); // output: 1

Explanation:

The nobleInteger function takes an array arr as input.
The first step is to sort the array in ascending order using the sort() method.
Then, we loop through each element in the array and check if it is a noble integer.
A number P is a noble integer if the number of elements greater than P in the array equals P.
In the loop, we check if the current number arr[i] equals arr.length - i - 1. The expression arr.length - i - 1 gives the number of elements greater than arr[i] in the array.
We also check if the current number is not equal to the next number in the sorted array to avoid counting duplicate numbers.
If we find a noble integer, we return 1. If no noble integer is found, we return -1.
We can call the nobleInteger function with an example array and log the result to the console.
