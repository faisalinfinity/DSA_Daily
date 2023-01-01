// Super Digit Ended
// Description

// We define super digit of an integer N using the following rules:

// If N has only 1 digit, then its super digit is N.
// Otherwise, the super digit of N is equal to the super digit of the sum of the digits of N.
// Given an integer, find the super digit of the integer.


// Input
// Input Format

// The first line contains the number of testcase T

// For each testcase:

// The first and only line contains the number N
// Constraints

// 1<=T<=10

// 1<=N<=10^(10^4)


// Output
// For each testcase, print the super digit in a new line


// Sample Input 1 

// 3
// 45
// 8
// 186
// Sample Output 1

// 9
// 8
// 6

//Enter code here

function Super(n){

    if(n%10==n){
        
        return n
    }
    
    let m=String(n).split("").map(Number).reduce((acc,el)=>{
       return acc+el 
    },0)
    
    return Super(m)
    
    
    }
    
    function runProgram(input)
    {
        input=input.trim().split("\n")
        tc=+input[0]
        line=1
        
        for(let i=0;i<tc;i++){
            n=input[line]
            line++
            console.log(Super(n))
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