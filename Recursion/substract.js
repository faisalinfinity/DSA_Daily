// Subtract Digits Ended
// Description

// You are given an integer n.

// On each step, you may subtract one of the digits from the number.
// How many steps are required to make the number equal to 0?


// Input
// Input Format

// The first line contains the number of testcases, T

// For each testcase:

// The first and only contains the number N
// Constraints

// 1<=T<=5

// 1<=N<=50


// Output
// For each testcase, print the minimum number of steps.


// Sample Input 1 

// 4
// 20
// 19
// 15
// 1
// Sample Output 1

// 4
// 3
// 3
// 1
// Hint

// 20-> 18 -> 10 -> 9 ->0

// 19 -> 10 -> 9 -> 0

// 15 -> 10 -> 9 ->0

// 1 ->0

//Enter code here
let memo = {};
function fun(n) {
    let queue = [n];
    let visited = new Set();
    let steps = 0;

    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            if (curr === 0) {
                return steps;
            }
            for (let digit of curr.toString()) {
                let next = curr - digit;
                if (!visited.has(next)) {
                    queue.push(next);
                    visited.add(next);
                }
            }
        }
        steps++;
    }
}

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    
    for(let i=0;i<tc;i++){
        n=input[line]
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