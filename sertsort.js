// Square Root Sorting -3:1:25
// Description

// Given an array of N space-separated integers, you have to sort the given array in increasing order of their absolute value integer square root. If two numbers have the same integer square root value then the smaller number comes first in the sorted array.

// Integer Square Root Value

// of 4 is 2

// of 5 is also 2

// of 8 is also 2

// of 9 is 3

// of -9 is 3

// of -8 is 2


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains an integer n, the size of the array.

// Second-line contains n space-separated integers.

// Constraints

// 1 <= T <= 10

// 1 <= n <= 1000

// -1000 <= arr[i] <= 1000


// Output
// For each test case, print the required sorted array, in a new line.


// Sample Input 1 

//Enter code here
function fun(n,arr){
    arr.sort(function(a,b){
        return a-b
    })
     arr1=[]
     for(let i=0;i<n;i++){
         arr1[i]=Math.floor(Math.pow(Math.abs(arr[i]),0.5))
     }
       
       for(let i=0;i<n-1;i++){
           
           let swap=0
           for(let j=0;j<n-1-i;j++){
               if(arr1[j]>arr1[j+1]){
                   swap=1
                   let temp=arr1[j]
                   arr1[j]=arr1[j+1]
                   arr1[j+1]=temp
                   
                   let temp2=arr[j]
                   arr[j]=arr[j+1]
                   arr[j+1]=temp2
                   
                   
               }
           }
           
           if(swap==0){
               break;
           }
       }
   
    console.log(arr.join(" "))
}
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line]
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
        
        fun(n,arr)
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