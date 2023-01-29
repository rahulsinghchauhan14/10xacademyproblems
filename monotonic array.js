```
Monotonic Sequence
Given a sequence of integers, check if it is monotonic or not. A sequence is called monotonic if it is either non-increasing or non-decreasing.

Input
First line contains an integer n, denoting the number of elements in the sequence.

Next n lines contain one integer each..

Output
1 if the given sequence is monotonic.

0 if the given sequence is not monotonic.

Example
Input:

5
3
12
34
34
56
Output:

1
```

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let inputArr = [];

for(let i=0; i<n; i++){
    inputArr.push(parseInt(readLine()));
}
  
function isMonotonic(n, sequence) {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 0; i < n - 1; i++) {
    if (sequence[i] > sequence[i + 1]) {
      isNonIncreasing = false;
    }
    if (sequence[i] < sequence[i + 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing ? 1 : 0;
}

console.log(isMonotonic(n,inputArr))
 
