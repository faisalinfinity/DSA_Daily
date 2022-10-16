// Valid Stack Sequence -2:56:12
// Description

// Given two integer arrays pushed and popped each with distinct values, print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of values - n
// The second line contains the pushed array
// The third line contains the popped array
// Constraints

// 1<=t<=10

// 1<=n<=10^5

// All elements of pushed and popped are distinct


// Output
// Print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, or "NO" otherwise.


// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 4 5 3 2 1
// 5
// 1 2 3 4 5
// 4 3 5 1 2
// Sample Output 1

// YES
// NO
// Hint

// Explanation 1 : We might do the following sequence:

// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1


function stacks(n,arr1,arr2){
    let stack=[]
    let j=0
    for(let i=0;i<n;i++){
        stack.push(arr1[i])
        
        while(stack[stack.length-1]==arr2[j] && stack.length!==0){
            stack.pop()
            j++
        }
    }
    
if(stack.length==0){
    console.log("YES")
}
else{
    console.log("NO")
}

}
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line]
        line++
        arr1=input[line].trim().split(" ").map(Number)
        line++
        arr2=input[line].trim().split(" ").map(Number)
        line++
        stacks(n,arr1,arr2)
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
