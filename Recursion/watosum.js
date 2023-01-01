// Ways to sum N Ended
// Description

// Given an integer N. In how many ways you can add numbers 1, 2, and, 5 such that the summation equals N. (Check sample input for more clarity)


// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Single integer denoting the value of N.

// Constraints:

// 1 <= T <= 100
// 1<= N <= 30


// Output
// For each test case, print in a new line, a single integer denoting the required number of ways.


// Sample Input 1 

// 1
// 5
// Sample Output 1

// 9
// Hint

// No of the ways for N=5 are:-

// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 1 + 1 + 2 + 1
// 1 + 2 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 2 + 2
// 2 + 1 + 2
// 2 + 2 + 1
// 5


function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
       n=+input[line]
       line++
      console.log( waytosum(n))
    }
    
    function waytosum(n){
        if(n==0){
            return 1
        }
        if(n<0){
            return 0
        }
        
        return waytosum(n-1)+waytosum(n-2)+waytosum(n-5)
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