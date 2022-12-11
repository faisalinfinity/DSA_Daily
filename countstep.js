// Count your steps Ended
// Description

// A number N has to be changed to 1.

// The operations that can be used are listed below:

// - Replace N with N/2 if n is divisible by 2

// - Replace N with 2N/3 if n is divisible by 3

// - Replace N with 4N/5 if n is divisible by 5

// You can not use any other operation on the number. You can perform any of the operations with this number any arbitrary (possibly, zero) number of times.

// For example, you can replace 30

// with 15 using the first operation, with 20 using the second operation or with 24 using the third operation.

// The number of operations you are required to do for changing the number to 1 will be the expected output.

// If it can not be done, output is -1

// There are T number of test cases in single input.


// Input
// Input Format :

// Number of test cases, value of N in new line

// Constraints :

// - N <= 10000000000

// - T <= 1000




// Output
// number of steps


// Sample Input 1 

// 6
// 1
// 10
// 25
// 30
// 14
// 27
// Sample Output 1

// 0
// 4
// 6
// 6
// -1
// 6
//Enter code here

function fun(n){
    let count=0
    let flag=true
    if(n==1){
        return 0
    }
    while(n>1){
        if(n%2==0 && n>0 && n!==0){
            count++
            n=n/2
        } if(n%3==0 && n>0 && n!==0){
            count++
            n=2*n/3
        } if(n%5==0 && n>0 && n!==0){
            count++
            n=4*n/5
        }else if(n%2!==0 && n%3!==0 && n%5!==0 && n>1){
            
                 return -1
            flag=false
        }
        
    }
     return count
  
}

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line].trim()
        line++
        console.log(fun(n))
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