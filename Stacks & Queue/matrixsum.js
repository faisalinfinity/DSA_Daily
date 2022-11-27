// Conditional Matrix Sum -70:37:7
// Description

// You are given a matrix(2 dimensional array) of integers of n rows and m columns. Your task is to write a program that calculates sum of all such integers present in the matrix which are divisible by 3.


// Input
// Input Format

// First line contains n and m.

// In the next n lines, there are m integers in each line which makes up elements of matrix.

// Constraints

// n<100

// m<100


// Output
// Output Format

// Output one number which is the sum of all such integers which are divisible by 3.


// Sample Input 1 

// 2 3
// 3 1 8
// 2 6 0
// Sample Output 1

// 9

//Enter code here
let sum=0


function test(m,arr){
    for(let i=0;i<m;i++){
        if(arr[i]%3==0){
            sum=sum+arr[i]
        }
    }
    // console.log(sum)
}



function runProgram(input)
{
    input=input.trim().split('\n')
    x=input[0].trim().split(' ').map(Number)
    n=x[0]
    m=x[1]
    
    line=1

    for(let i=0;i<n;i++){
        arr=input[line].trim().split(' ').map(Number)
        line++
        test(m,arr)
    }
    
    console.log(sum)
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