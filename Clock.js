```
Clock
Given two positive integers num1 and num2, the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.

Input
Two space seperated values denoting num1, num2 respectively.

Output
One integer, denoting the required result.

Example
Input1:

5 7
Output1:

12
Input2:

5 10
Output2:

3
```

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
 
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let time=readLine();
let l1=time.split(" ");
let num1 = isNaN(parseInt(l1[0])) ? 0 : parseInt(l1[0]);
let num2 = isNaN(parseInt(l1[1])) ? 0 : parseInt(l1[1]);
 
function clockSum(num1, num2) {
  // find the sum of the two numbers
  let sum = num1 + num2;
  
  // if the sum is greater than 12, subtract 12
  if (sum > 12) {
    sum = sum % 12;
  }
  if(sum === 0) sum = 12;
  return sum;
}
   
  console.log(clockSum(num1,num2));
