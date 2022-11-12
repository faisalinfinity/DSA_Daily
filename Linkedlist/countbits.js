// Count Bits Ended
// Description

// Given an integer n, print an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains integer n.

// Constraints

// 1 <= T <= 10

// 0 <= n <= 1000


// Output
// For each test case, print the array.


// Sample Input 1 

// 2
// 2
// 5
// Sample Output 1

// 0 1 1
// 0 1 1 2 1 2
// Hint

// For the above test cases :

// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

//Enter code here
// let n=2

// let x=n.toString(2)
// console.log(typeof(x))

const f=(n)=>{
    let ans=''
   
    for(let i=0;i<=n;i++){
         let str=i.toString(2)
         ans+=count(str)+" "
        
        
    }
    console.log(ans)
    
    
   function count(str){
       let c=0
       
       for(let i=0;i<str.length;i++){
           if(str[i]==='1'){
               c++
           }
       }
       return c
       
   }
    
    
}


function runProgram(input)
{ 
    input=input.trim().split("\n")
    tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        n=+input[line]
        line++
        f(n)
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