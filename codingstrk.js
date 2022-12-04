// Coding Streak -7:55:34
// Description

// For last N days, you did nothing but eat, sleep and code.

// A close friend of you kept an eye on you for the last N days. For every single minute of the day, he kept track of your actions and prepared a log file.

// The log file contains exactly N lines, each line contains a string of length 1440 ( i.e. the number of minutes in 24 hours of the day).

// The string is made of characters E, S, and C only; representing Eat, Sleep and Code respectively. the ith character of the string represents what you were doing during the ith minute of the day.

// Your friend is now interested in finding out the maximum of the longest coding streak of the day - X.

// He also wants to find the longest coding streak of N days - Y.

// Coding streak means the number of C's without any E or S in between.

// See sample test case for clarification.


// Input
// Input Format

// First line of each file contains N - number of days.

// Following N lines contains a string of exactly 1440 length representing his activity on that day.

// Constraints

// 1 ≤ N ≤ 365

// The string consists of characters E, S, and C only.

// String length is exactly 1440.

// Note: The sample test case does not follow the given constraints on string length to avoid large data. It is meant only for explanation. We assure you that the hidden test files strictly follow the constraints.


// Output

//Enter code here

function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    line=1
    mat=[]
    for(let i=0;i<n;i++){
        arr=input[line].trim()
        line++
        mat.push(arr)
    }
    
    let c1=0
    let c2=0
    let max1=0
    let max2=0
    
    for(let i=0;i<n;i++){
               c1=0
        for(let j=0;j<mat[i].length;j++){
            
            if(mat[i][j]=="C"){
                c1++
                c2++
              
            }else{
                   max1=Math.max(max1,c1)
                max2=Math.max(max2,c2)
                c1=0
                c2=0
            }
        }
           max1=Math.max(max1,c1)
    }
    
    console.log(max1+" "+max2)

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