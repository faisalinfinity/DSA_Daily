// Column Minimum -75:24:23
// Description

// Given a matrix A of size n and m, you have to print the array of size m where each element represents the minimum of ith column of the matrix A.


// Input
// Input Format

// First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.

// Following n lines contains m-integers.

// Constraints

// 1 <= n <= 100

// 1 <= m <= 100

// 1 <= arr[i][j] <= 10^4


// Output
// Print the required array.


// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3
// Hint

// Minimum of 1st column = 1

// Minimum of 2nd column = 2

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    const [n,m]=input[0].trim().split(" ").map(Number)
    line=1
    mat=[]
    for(let i=0;i<n;i++){
        mat.push(input[line].trim().split(" ").map(Number))
        line++
    }
   
   let ans=[]
   for(let i=0;i<m;i++){
       let min=Infinity
       for(let j=0;j<n;j++){
           min=Math.min(mat[j][i],min)
       }
       ans.push(min)
   }
     console.log(ans.join(" "))
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