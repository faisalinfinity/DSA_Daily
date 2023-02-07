// Count With Condition -122:41:18
// Description

// Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.


// Input
// Input Format

// First line consists of N and X separated by space.

// Second line consists of N integers separated by spaces.

// Constraints

// 1 <= N <= 20

// 1 <= X <= 100


// Output
// Print the count in a single line.


// Sample Input 1 

// 4 10
// 1 2 3 4
// Sample Output 1

// 1
// Hint

// Sample 1 Explanation

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    const [n,m]=input[0].trim().split(" ").map(Number)
    const arr=input[1].trim().split(" ").map(Number)
    let count=0
    SubSum(arr,m,0)
    console.log(count)
    function SubSum(arr,s,i){
        if(s==0){
            count++
            return 
        }
        if(i==arr.length || s<0){
            return 
        }
        
        let opt1=SubSum(arr,s-arr[i],i+1)
        let opt2=SubSum(arr,s,i+1)
        
       return opt1 || opt2
     
        
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