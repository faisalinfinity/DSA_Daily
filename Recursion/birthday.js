// Birthday Shopping -79:58:30
// Description

// Alex is celebrating his birthday and wants to buy a few things for himself.

// There are n items present in the shop indexed from 1 to n. He wished he could buy everything but he has been instructed by his mother that he can buy exactly k items.

// Print all the various possible combinations of items he can buy.

// Make sure the combinations are sorted and distinct.

// For Clarity -

// [1,2] is valid while [2,1] is not.


// Input
// The first line of the input contains two integers n(1 ≤ n ≤ 20) and k (1 ≤ k ≤ n).


// Output
// Print each possible combination in a new line.

// Elements within the combination must be in non-decreasing order. All the combinations must be distinct and sorted in ascending order or lexicographically.


// Sample Input 1 

// 4 2
// Sample Output 1

// 1 2 
// 1 3 
// 1 4 
// 2 3 
// 2 4 
// 3 4 
// Sample Input 2 

// 3 1
// Sample Output 2

// 1
// 2
// 3
// Hint

// Sample Input 1 :

// 4 2
// Total Items = 4 ( 1, 2, 3, 4)

// k = 2 (No of things he can buy)

// Combinations possible of 2 items out of 4 :

// 1 2 
// 1 3 
// 1 4 
// 2 3 
// 2 4 
// 3 4 


// Sample Input 2 :

// 3 1
// Total Items = 3 ( 1, 2, 3)

// k = 1 (No of things he can buy)

// Combinations possible of 1 item out of 3 :

// 1
// 2
// 3

//Enter code here
function runProgram(input)
{
    input=input.trim().split(" ")
    n=+input[0]
    k=+input[1]
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(i+1)
    }
    let f2=[]
    let final=[]
    let ans=[]
    Comb(arr,0)
    for(let i=0;i<final.length;i++){
        
             console.log(final[i].join(" "))
    }
    
    function Comb(arr, index) {
  if (index == k) {
    let temp = [...ans];
    final.push(temp);
    return;
  }

  for (let j = index; j < arr.length; j++) {
    // Check if the element being added to the combination is greater than
    // the last element in the combination. If it is, return early.
    if (ans.length > 0 && arr[j] <= ans[ans.length - 1]) {
      continue;
    }
    ans.push(arr[j]);
    Comb(arr, index + 1);
    ans.pop();
  }
}

}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }