// Solve a financial problem -2:3:25
// Description

// Given a list of prices of a single stock for N number of days, find stock span for each day. Stock span is defined as a number of consecutive days prior to the current day when the price of a stock was less than or equal to the price at current day.
// oj1.png

// For the first day, span is always 1. In the example we can see that for day 2 at 60, there is no day before it where the price was less than 60. Hence span is 1 again. For day 3, the price at day 2 (60) is less than 70, hence span is 2. Similarly, for day 4 and day 5. Remember days should be consecutive, that’s why the span for day 4 is 1 – even though there was a day 2 where the price was less than 65.


// Input
// Input Format

// First line contains an integer T specifying the number of test cases.

// First line of each test case contains the value of N

// Second line of each test case contains N space separated integers which are the stock price for N days

// Constraints

// N <= 1000000


// Output
// Output Format

//Enter code 
function f(n,arr){
    stack=[]
    ans=[]
    for(let i=0;i<n;i++){
        
        while(stack.length!==0 && stack[(stack.length-1)][0]<=arr[i]){
            stack.pop()
            
        }
        
        if(stack.length==0){
            ans.push(i+1)
        }
        else{
            ans.push(i-stack[stack.length-1][1])
        }
        
        
        
        
        stack.push([arr[i],i])
    }
    
    console.log(ans.join(" "))
}
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line]
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
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