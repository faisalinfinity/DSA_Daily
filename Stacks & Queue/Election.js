// Election campaign -1:49:59
// Description

// Elections are close and you are a party worker of a political party and you have been assigned a task.

// The task is it to put up a poster on the side of a highway. There are n poles and you have to choose any two poles to put up the poster. Say you choose two poles of height h1 and h2 then the poster will be put up of height which is minimum of the two.

// And the width would be the distance between them. You have to put up the poster of maximum area to make your boss happy.

// What is the maximum area of the poster you can fit using the given poles. The n consecutive poles are separated by a unit distance.



// The first line contains the number of testcases t.

// Next 2*t lines we have the description of the t testcases.

// For each testcase first line contains n the number of consecutive poles. Next line contains n integers, the height of the n consecutive poles respectively separated by a unit distance.

// Constraints
// 1<= t <= 1000

// 2 <= n <=1000

// 1 <= height <= 1000


// Output
// Output Format

//Enter code here
function test(n,arr){
    let area=0
    let max=0
    for(let i=0;i<n-1;i++){
        for(let j=n-1;j>0;j--){
            area=(j-i)*Math.min(arr[i],arr[j])
            max=Math.max(area,max)
            
        }
    }
    
    console.log(max)
    
    
}

function runProgram(input)
{
    input=input.trim().split('\n')
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line].trim()
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
        
        test(n,arr)
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