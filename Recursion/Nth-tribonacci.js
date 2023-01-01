// N-th Tribonacci Number Ended
// Description

// The Tribonacci sequence Tn is defined as follows:

// T0= 0, T1= 1, T2= 1, and Tn+3= Tn+ Tn+1+ Tn+2 for n >= 0.

// Givenn, return the value of Tn mod 10^9+7.


// Input
// Input Format

// The first line contains the number of testcase T

// Then T lines follow, each containing an integer N

// Constraints

// 1<=T<=10^5

// 1<=N<=50


// Output
// For each test case print the value of Tn in a new line


// Sample Input 1 

// 1
// 4
// Sample Output 1

// 4
// Hint

// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line]
        line++
        console.log(tribonacci(n))
    }
    
    function tribonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let c = 1;
    let d = 0;
    for (let i = 3; i <= n; i++) {
      d = (a + b + c);
      a = b;
      b = c;
      c = d;
    }
    return d;
  }
}
    
    // function Tribonacci(n){
    //     if(n==1 || n==2){
    //         return 1
    //     }
    //     if(n<=0){
    //         return 0
    //     }
       
        
    //     return Tribonacci(n-3)+Tribonacci(n-2)+Tribonacci(n-1)
    // }


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