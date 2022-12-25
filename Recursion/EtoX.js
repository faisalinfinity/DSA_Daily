// Description

// One famous series says

// Image

// Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

// Image


// Input
// Input Format

// First and the only line of code contains x and n respectively

// Constraints

// x <= 14

// n <= 12


// Output


//Enter code here

function runProgram(input)
{
    input=input.trim().split(" ").map(Number)
    x=+input[0]
    n=+input[1]
    
    function factorial(n){
        if(n==1 || n==0){
            return 1
        }
        
        return n*factorial(n-1)
    }
    let sum=0
    
    function EtoX(x,n){
        if(n==0){
            sum+=1
            return sum.toFixed(4)
        }else{
            sum+=(1/factorial(n))*(x**n)
        }
        
        return EtoX(x,n-1)
    }
    
   console.log(EtoX(x,n))
    
  

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