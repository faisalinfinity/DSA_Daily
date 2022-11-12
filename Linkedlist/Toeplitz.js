// Toeplitz Matrix Ended
// Description

// Given anm x nmatrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements


// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The first line of each testcase contains two integers n and m - the size of the matrix.

// The n lines that follow each contain m integers.

// The ith (1 ≤ i ≤ n) line contain m integers, jth (1 ≤ j ≤ m) of which ismatrix[i][j].

// Constraints
// 1 ≤ t ≤ 100

// 1 ≤ n,m ≤ 1000

// 1 ≤ matrix[i][j] ≤ 1000000


// Output
// Output Format
// For each testcase printYESif it is Toeplitz matrix elseNO.


// Sample Input 1 

// 2
// 2 2
// 1 2
// 2 1
// 3 4
// 1 2 3 4
// 5 1 2 3
// 9 5 1 2
// Sample Output 1

// YES
// YES


//Enter code here
function matrix(m,n,mat){
    let c=0
   for(let i=0;i<m-1;i++){
      
       for(let j=0;j<n-1;j++){
           if(mat[i][j]!==mat[i+1][j+1]){
               console.log('NO')
           return false;
           }
       }
   }
   console.log('YES')
   
}
function runProgram(input)
{
   input=input.trim().split('\n')
   tc=+input[0]
   line=1
   for(let i=0;i<tc;i++){
  x=input[line].trim().split(" ").map(Number)
   m=x[0]
   n=x[1]
   line++
   let mat=[]
    for(let j=0;j<m;j++){
       arr=input[line].trim().split(' ').map(Number)
       line++
       mat.push(arr)
   }
   
        matrix(m,n,mat)
       
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


