You are given a 1D image. The image is a sequence of pixel values. You are also given an icon of a particular size. The icon is a sequence of 2 pixels. Find the number of times this icon appears in the image.

Input
First line contains n, the number of pixels in the image. This is followed by n lines, each containing one positive integer denoting a pixel, j, 0 <= j <= 255. This is followed by m, the number of pixels in the icon. This is follwoed by m lines, each containing one positive interger denoting a pixel k, 0 <= k <= 255.

Output
An integer i i >= 0, denoting the number of times the icon appears in the image.

Example
Input:

10
7
27
31
8
9
10
25
8
9
11
2
8
9
Output:

2
The first line is 10 i.e. 10 pixels in the given image 7, 27, 31, 8, 9, 10, 25, 8, 9, 11 is the given image After this, the line contains 2, i.e. 2 pixels in the icon 8, 9 is the given icon. 8, 9 appears twice in the image. So 2 is the answer.




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
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let m = parseInt(readLine());
let comparray = [];
for (let i = 0; i < m; i++) {
  comparray.push(parseInt(readLine()));
}

let i,finalcount = 0; 
  while(i < n){
  let count = 0;
  for (let j = 0; j < m; j++) { 
    if (arr[i+j] == comparray[j]) { 
      count++; 
    }
  }
  if (count == m) {
    finalcount++;
    i=i+m;
  }
  else{
    i++;
  }
  
}
console.log(finalcount);
