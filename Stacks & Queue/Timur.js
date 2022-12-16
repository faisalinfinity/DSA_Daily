// Spell Correctly Ended
// Description

// Timur likes his name. As a spelling of his name, he allows any permutation of the letters of the name.

// For example, the following strings are valid spellings of his name: Timur, miurT, Trumi, mriTu. Note that the correct spelling must have uppercased T and lowercased other letters.

// Today he wrote string s of length n consisting only of uppercase or lowercase Latin letters. He asks you to check if s is the correct spelling of his name.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains an integer numbers n - the length of the string.

// The second line of each test case contains a string s consisting of only uppercase or lowercase Latin characters.

// Constraints

// 1 <= T <= 10

// 1 <= n <= 10


// Output
// For each test case, output "YES" (without quotes) ifssatisfies the condition, and "NO" (without quotes) otherwise, in a new line


// Sample Input 1 

// 2
// 5
// Timur
// 5
// TIMUR
// Sample Output 1

// YES
// NO
// Hint

// For the first test case, it has T in upper case format and remaining i, m, u, r in lower case format which resembles the original string.

// For the second test case, all letters are present but all in upper case which is not required.

//Enter code here

function isValidSpelling(s) {
    // Initialize counts for each letter in the name "Timur"
    let tCount = 0;
    let iCount = 0;
    let mCount = 0;
    let uCount = 0;
    let rCount = 0;
  
    // Iterate through the string and count the number of each letter
    for (const c of s) {
      if (c === 'T') {
        tCount++;
      } else if (c === 'i') {
        iCount++;
      } else if (c === 'm') {
        mCount++;
      } else if (c === 'u') {
        uCount++;
      } else if (c === 'r') {
        rCount++;
      }
    }
  
    // Check if the counts of each letter are valid
    return tCount === 1 && iCount === 1 && mCount === 1 && uCount === 1 && rCount === 1;
  }
  function runProgram(input)
  {
      input=input.trim().split("\n")
      tc=+input[0]
      line=1
      let i=0
      while(i<tc){
          n=+input[line]
          line++
          str=input[line].trim()
          line++
         
          i++
          console.log(isValidSpelling(str)?"YES":"NO")
          
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