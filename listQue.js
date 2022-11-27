// List and Queue 2 Ended
// Description

// You need to implement a list using queue data structure. You can only uueue.get()se q and queue.put() methods.

// Note- import and the use queue data structure.


// Input
// The first line contains the number of operations (t).

// Next t lines contains commands for the list.

// Eg- Push 3 means add 3 in the list

// Pop means to remove the last element of the list and print it on the screen

// Note-If the list is empty print- 'Empty' (Without the quotes)

// t <= 500000


// Output
// Print the last element as a single integer on the screen.


// Sample Input 1 

// 3
// Push 4
// Push 5
// Pop
// Sample Output 1

// 5
// Hint

// After two push operations the list would look like - [4,5], popping it should return 5

//Enter code here
let q=[]
function f(x,n){
    
    if(x=="Push"){
        q.push(n)
    }
    else{
        if(q.length==0){
            console.log("Empty")
        }
        else{
             console.log(+q.pop())
            
        }
       
    }
   

    
    
}
function runProgram(input)
{
    input=input.trim().split("\n")
    k=+input[0]
    line=1
    for(let i=0;i<k;i++){
      let  [x,n]=input[line].trim().split(" ").map(String)
        line++
        f(x,n)
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