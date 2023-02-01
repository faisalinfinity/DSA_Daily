// Flower Management -122:22:25
// Description

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer arrayflowerbedcontaining0's and1's, where0means empty and1means not empty, and an integern, find out if ifnnew flowers can be planted in theflowerbedwithout violating the no-adjacent-flowers rule.


// Input
// Input Format

// The first line contains the number of testcases T

// The first line of each testcase contains number of plots M, and the required number of flowers to be added N

// The second line of each testcase contains the values of M plots : 0 or 1

// Constraints

// 1<=T<=10

// 1<=M<=10^6

// 1<=N<=10^5


// Output
// Print "Yes" if it is possible to place N flowers else print "No"


// Sample Input 1 

// 1
// 5 1
// 1 0 0 0 1
// Sample Output 1

// Yes
// Hint

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
       const [n,m]=input[line++].trim().split(" ").map(Number) 
       const arr=input[line++].trim().split(" ").map(Number) 
       fun(n,m,arr)
       
    }
    
    function fun(n,m,arr){
       let count=0
       for(let i=0;i<n;i++){
           if(i==0 && arr[i]==0){
               if(arr[i+1]==0){
                   arr[i]=1
                   count++
               }
           }else if(i==n-1 && arr[n-1]==0){
               if(arr[i-1]==0){
                   arr[i]=1
                   count++
               }
           }else {
               if(arr[i-1]===0 && arr[i]===0 && arr[i+1]===0){
                   arr[i]=1
                   count++
               }
           }
       }
       if(count>=m){
           console.log("Yes")
       }else{
           console.log("No")
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