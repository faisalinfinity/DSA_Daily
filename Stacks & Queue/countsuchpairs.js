// Count such pairs Ended
// Description

// You are given an array A of N integers along with a target integer. Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.


// Input
// Input Format :

// First line contains 2 integers: N and the target respectively.

// Second line contains N integers which are the elements of the array.

// Constraints :

// N<100


// Output
// Print one number which is number of such pairs.


// Sample Input 1 

// 5 9
// 3 0 6 2 7


//Enter code here

function fun(n,k,arr){
    let i=0
    let sum=0
    let count=0
    
    arr.sort((a,b)=>a-b)
    
  while(i<n-1){
      let j=i+1
      while(j<n){
          if(arr[i]+arr[j]==k){
              count++
          }
          j++
      }
      i++
  }
    
   
    
    console.log(count)
    
    

    
}

function runProgram(input)
{
    input=input.trim().split("\n")
    x=input[0].trim().split(' ').map(Number)
    n=x[0]
    k=x[1]
    
    let arr=input[1].trim().split(" ").map(Number)
    fun(n,k,arr)
    
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