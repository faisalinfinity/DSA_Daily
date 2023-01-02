// Ways to zero Ended
// Description

// Given an integer N. In how many ways you can subtract numbers 1, 2, and, 5 from N such that value of N reduces to 0. (Check sample input for more clarity)


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
// 4
// Sample Output 1

// 5
// Hint

// No of the ways for N=4 are:-

// (4-1) = 3 --> ( 3 - 1) = 2 --> ( 2 - 1 ) = 1 --> ( 1-1) = 0
// (4-1) = 3 --> ( 3 - 1) = 2 --> ( 2 - 2 ) = 0
// (4-1) = 3 --> ( 3 - 2) = 1 --> ( 1-1) = 0
// (4-2) = 2 --> ( 2 - 1 ) = 1 --> ( 1-1) = 0
// (4-2) = 2--> ( 2 - 2 ) = 0

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=input[line].trim()
        line++
        console.log(f(n))
        
    }
    
    function f(n){
        if(n==0){
            return 1
        }
        if(n<0){
            return 0
        }
        
        return f(n-1)+f(n-2)+f(n-5)
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