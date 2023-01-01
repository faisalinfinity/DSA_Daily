// Non Repetitive Substrings Ended
// Description

// Given a string S and a number K, find the number of substrings of length K such that each character in the substring is present only once.

// Note : The string contains special characters, capital letters, small letters

// Input
// Input Format

// The first line contains the number of testcases T

// For each testcase:

// The first line contains a string S

// The second line contains the number K

// Constraints

// 1<=T<=10

// 1<=length of S<=10^4

// 1<=K<=10^4


// Output
// For each testcase print the number of substrings of length K such that there are no repetitions in the subtring


// Sample Input 1 

// 1
// idwmdggom
// 2
// Sample Output 1

// 7
// Hint

// The valid substrings are : id dw wm md dg go om

//Enter code here

function fun(S,K){
    let count=0;
    
    for(let i=0;i<S.length-K+1;i++){
        let substring=S.substring(i,i+K)
        let unq=true;
        
        for(let j=0;j<substring.length;j++){
            if(substring.indexOf(substring[j])!==substring.lastIndexOf(substring[j])){
                unq=false;
                break;
            }
        }
        if(unq){
            count++
        }
        
    }
    return count
}

function runProgram(input)
{
    input=input.trim().split("\n")
    let tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        S=input[line].trim()
        line++
        K=+input[line]
        line++
       console.log( fun(S,K))
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