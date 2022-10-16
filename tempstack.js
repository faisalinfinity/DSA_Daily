// Description

// Given an array of integers temperatures represents the daily temperatures, print an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of days, - n
// The second line contains the temperatures for each day
// Constraints

// 1<=t<=10

// 1<=n<=10^5


// Output
// Print n integers where the ith value represents after how many days there will a warmer day, it such a does not exist print 0 for the ith day


// Sample Input 1 

// 2
// 4
// 30 40 50 60
// 8
// 73 74 75 71 69 72 76 73
// Sample Output 1

// 1 1 1 0
// 1 1 4 2 1 1 0 0
// Hint

// In the first sample test case,
// For Day 1, the next day is warmer, so the answer is 1

// For Day 2, the next day is warmer, so the answer is 1

// For day 3, the next day is warmer, so the answer is 1

// For day 4, we don't have the data after this day, so the answer is 0


function f(n,arr){
    let stack1=[]
    let stack2=[]
    let ans=[]
    
    for(let i=n-1;i>=0;i--){
        
        
        while(stack1.length!==0 && stack1[stack1.length-1]<=arr[i]){
            stack1.pop()
            stack2.pop()
        }
        
        if(stack1.length==0 ){
            ans.push(0)
        }
        else if (stack1.length!==0 && stack1[stack1.length-1]>arr[i]){
            
            ans.push(stack2[stack2.length-1]-i)
            
        }

        stack1.push(arr[i])
        stack2.push(i)
        
    }
    
    console.log(ans.reverse().join(" "))
}
function runProgram(input)

{
    input=input.trim().split("\n")
    tc=+input[0]
    l=1
    for(let i=0;i<tc;i++){
        n=+input[l]
        l++
        arr=input[l].trim().split(" ").map(Number)
        l++
        f(n,arr)
        
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