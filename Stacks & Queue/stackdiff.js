// Stack Difference Ended
// Description

// You are given a stack on which an operation X can be performed. The operation X can be of two types

// X = 1 -> A value Y is inserted into the stack.

// X = 2 -> The value at the top of the stack is popped out, if the stack is not empty.

// Every time a query of type 2 is executed, the value removed from the stack is subtracted from a variable S. If the query of type 2 and the stack is empty, the value of S is incremented by 1.

// You are given Q queries which need to be executed on the stack. Find the absolute value of S, after all the queries are executed.

// The value of S initially is S = 0.


// Input
// The first line contains Q, the number of queries to be executed. Next Q line contains query of type 1 or 2. For query of type 1, another value Y is provided, which denotes the value to be inserted into the stack.

// Constraints

// 1 <= Q <= 100

// 1 <= X <= 2

// 1 <= Y <= 100


// Output
// Print the value of S, after all the queries are executed.


// Sample Input 1 

// 3
// 1 2
// 2
// 2
// Sample Output 1

// 1
// Hint

// In the sample test case, Q = 3, therefore, three queries need to be executed. Initially, the value of S = 0.

// In the first query, X = 1, and Y = 2 is inserted into the stack.

// The second query is of type X = 2, therefore, the value at the top of the stack is popped out of the stack, and subtracted from S. Therefore, the value of S becomes S =  -2.

// The third query is of type X = 2, but the stack is empty. Therefore, the value of S is incremented by 1. Hence, the value of S becomes S = -1.

// Finally, the absolute value of S = 1. Therefore, the output is 1.

//Enter code here



function f_stack(q,mat){
    let stack=[]
    let S=0
    
    for(i=0;i<q;i++){
        if(mat[i][0]==1){
        stack.push(mat[i][1])
    }else
    if((mat[i][0]==2) && stack.length!==0){
        S=S-stack.pop()
    }else
    
    if(mat[i][0]==2 && stack.length==0){
        S=S+1
        
    }
        
        
    }
    
    console.log(Math.abs(S))
}





function runProgram(input)
{
    input=input.trim().split('\n')
    q=+input[0]
    let line=1
    let mat=[]
    for(let i=0;i<q;i++){
        let arr=input[line].trim().split(" ").map(Number)
        line++
        mat.push(arr)
    }
    f_stack(q,mat)
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