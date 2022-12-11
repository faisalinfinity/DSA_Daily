// Subsequence Check Ended
// Description

// You are given two strings, string a and string b, you have to check whether string a is a subsequence of string b or not. If yes then print YES else print NO.


// Input
// Input Format

// The first line contains integer numbers N and M - the length of the string a and length of string b.

// The second line contains the string a.

// The third line contains the string b.

// Constraints

// 1 <= N <= M <= 10^5


// Output
// If the given condition is true print YES else print NO.


// Sample Input 1 

// 4 6
// abcd
// aebcrd
// Sample Output 1

// YES
// Sample Input 2 

// 5 7
// aaacc
// abaccac
// Sample Output 2

// NO

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
   let  [n,m]=input[0].trim().split(" ").map(Number)
    str1=input[1].trim()
    str2=input[2].trim()
    ans=[]
    let i=0
    j=0
    while(i<n && j<m){
        if(str1[i]==str2[j]){
            i++
            j++
        }else{
            j++
        }
        
    }
    
        if(i==n){
            console.log("YES")
        return
        }
    console.log("NO")
    
    
  
       
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