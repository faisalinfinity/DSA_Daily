// Square Pattern -0:9:42
// Description

// Given an integer N, you need to print a square pattern as given in sample input/output.


// Input
// The first line contains a number N.

// Constraints:

// 3 <= N <= 10


// Output
// Print a square pattern for N.


// Sample Input 1 

// 4
// Sample Output 1

// * * * *
// *     *
// *     *
// * * * *
// Sample Input 2 

// 3
// Sample Output 2

// * * *
// *   *
// * * * 

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(i==0){
                bag+="* "
         }else if(i==n-1){
                bag+="* "
        }else{
                if(j==0 || j==n-1){
                    bag+="* "
                }else{
                    bag+="  "
                }
            }
        }
        console.log(bag.trim())
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