// Upper Bound in LogN -28:49:22
// Description

// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

// -> Test cases are such that there is always one number greater than k

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION


// Input
// Input Format

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints

// N<100


// Output
// Output upper bound


// Sample Input 1 

// 10 3
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 1

// 2
// Sample Input 2 

// 10 4
// 0 2 4 4 5 5 7 7 9 10

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    const [n,k]=input[0].trim().split(" ").map(Number)
    arr=input[1].trim().split(" ").map(Number)
    let low=0
    let high=arr.length
    let ans=[]
    Binary(low,high)
    console.log(ans.sort((a,b)=>a-b)[0])
   function Binary(low,high){
       if(low>high){
           return
       }
       let mid=Math.floor(low+(high-low)/2)
       if(arr[mid]>k){
               ans.push(mid)
           Binary(low,mid-1)
       }else if(arr[mid]<=k){
       
           Binary(mid+1,high)
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