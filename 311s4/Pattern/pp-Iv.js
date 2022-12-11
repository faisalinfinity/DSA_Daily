// Pattern Printing IV Ended
// Description

// Given an integerN, and a pattern. Print the pattern as given in the sample I/O.

// Note: Please check for spaces.


// Input
// The first and the only line of the input contains the value ofN.

// Constraints

// 1 <=N<= 25


// Output
// Print the pattern as given in the sample test case.



// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
// *       *
// *       *
// *       *
// *       *

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0].trim()
    
    for(let i=0;i<n;i++){
        str=""
        for(let j=0;j<n;j++){
            if(i==0){
                str+="* " //*+space
                
            }else if(j==0 || j==n-1){
                str+="* "  //*+space
            }else{
                str+="  " //2 spaces
            }
        }
        console.log(str.trim())
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