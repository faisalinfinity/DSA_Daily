// Photographer Ended
// Description

// Mark is asked to take a group photo of 2n people. The i-th person has height hi units.

// To do so, he ordered these people into two rows, the front row and the back row, each consisting of n people. However, to ensure that everyone is seen properly, the j-th person of the back row must be at least x units taller than the j-th person of the front row for each j between 1 and n, inclusive.

// Help Mark determine if this is possible.


// Input
// Input Format

// The first line contains one integer t — the number of test cases. Each test case consists of two lines.

// The first line of each test case contains two positive integers n and x — the number of people in each row and the minimum difference Mark wants.

// The second line of each test case contains 2n positive integers h1,h2,…,h2n — the height of each person in units.

// Constraints

// 1<=t<=10

// 1<=n<=10^5

// 1<=hi,x<=3*10^5


// Output
// For each test case, print a single line containing "YES" if Mark could arrange people satisfying his condition and "NO" otherwise.


// Sample Input 1 

// 3
// 3 6
// 1 3 9 10 12 16
// 3 1
// 2 5 2 2 2 5
// 1 2
// 8 6
// Sample Output 1

// YES
// NO
// YES
// Hint

// In the first test case, one possible order is to have the third, fifth, and sixth person on the back row and the second, first, and fourth on the front row. The heights of the people will look like this.

// Back 9 12 16

// Front 3 1 10

// It works because

// h3−h2=9−3≥6,
// h5−h1=12−1≥6, and
// h6−h4=16−10≥6.
// In the second test case, it can be shown there is no way to order people in a way that satisfies the condition.

// In the third test case, the only way to arrange people to satisfy the condition is to have the first person on the back row and the second person on the front row.

//Enter code here

function fun(n,x,heights){
    heights.sort((a, b) => a - b);

 // Check if the j-th person in the back row is at least x units taller than
 // the j-th person in the front row for each j between 1 and n, inclusive
 for (let i = 0; i < n; i++) {
   if (heights[i + n] - heights[i] < x) {
     return "NO";
   }
 }

 return "YES";
   
}

function runProgram(input)
{
   input=input.trim().split('\n')
   tc=+input[0]
   line=1
   
 
   
   for(let i=0;i<tc;i++){
      
       const [x,n]=input[line].trim().split(" ").map(Number)
       line++
       arr=input[line].trim().split(" ").map(Number)
       line++
       console.log(fun(x,n,arr))
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