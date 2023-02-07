// Similar texts - V0 -122:25:28
// Description

// Virat and Rohit don't like each other though they have many similarities. You are given 2 texts (strings) written by Virat and Rohit. Your task is to write a program that calculates the length of the longest similar characters in the text written by both.

// If string written by Virat is “AGGTAB” and that by Rohit is “GXTXAYB”, then the longest set of similar characters is “GTAB”, which is of length 4.

// Please note that the longest set of similar characters need not be continuous.


// Input
// Input Format :

// First line contains text/string written by Virat

// Second line contains text/string written by Rohit

// Constraints :

// Length of string <= 20


// Output
// Print the length as per conditions given in problem statement



// Sample Input 1 

// AEDFHR
// ABCDGH
// Sample Output 1

// 3
function runProgram(input)
{
    input=input.trim().split("\n")
    let str1=input[0].trim()
    let str2=input[1].trim()
    let n=str1.length
    let m=str2.length
    console.log(largestSimilarSubset(str1,str2,n,m))
    function largestSimilarSubset(str1,str2,n,m){
        if(n===0 || m===0)return 0
        if(str1[n-1]==str2[m-1]){
            return 1+largestSimilarSubset(str1,str2,n-1,m-1)
        }
        
        let opt1= largestSimilarSubset(str1,str2,n-1,m)
        let opt2= largestSimilarSubset(str1,str2,n,m-1)
        
        return Math.max(opt1,opt2)
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