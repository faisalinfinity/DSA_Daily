// Number of Occurences in logn -75:39:17
// Description

// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION


// Input
// Input Format :

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints :

// N<100


// Output
// Print number of times that number is present in the given list


// Sample Input 1 

// 6 3
// 2 3 3 3 6 9
// Sample Output 1

// 3

//Enter code here
//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    const [n,k]=input[0].trim().split(" ").map(Number)
    const arr=input[1].trim().split(" ").map(Number)
    arr.sort((a,b)=>a-b)
    let count=0
    let low=0
    let high=arr.length
    Binary(low,high)
    console.log(count) 
    
    function Binary(low,high){
       if(low>high){
           return
       }
            let mid=Math.floor(low+(high-low)/2)
            if(arr[mid]==k){
                count++
                Binary(mid+1,high)
                Binary(low,mid-1)
            }else if(arr[mid]>k){
                Binary(low,mid-1)
            }else{
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