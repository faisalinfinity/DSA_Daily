// Happy number -106:6:7
// Description

// Write an algorithm to determine if a numbernis happy.

// Ahappy numberis a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.

// Repeat the process until the number equals 1 (where it will stay), or itloops endlesslyin a cycle which does not include 1.

// Those numbers for which this processends in 1are happy.


// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The next t lines contain the description of the t testcases.

// The first and only line of each testcase contains an integer n.

// Constraints
// 1 <= t <= 30

// 1 <= n <= 2^31-1


// Output
// Output Format
// For each testcase output Yes if the number is happy, else No on a new line.


// Sample Input 1 

// 2
// 19
// 2
// Sample Output 1

// Yes 
// No

//Enter code here
function fun(n){
    let j=0
    while(+n>1){
              sum=0
        for(let i=0;i<n.length;i++){
            sum+=(+n[i])**2
        }
        n=sum.toString()
        if(j==1000){
            console.log("No")
            return
        }
        j++
        
    }
    console.log("Yes")
}

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=input[line]
        line++
        fun(n)
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