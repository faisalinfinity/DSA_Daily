// Anagram Detector! -5:6:37
// Description

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

// Given 2 phrases, write a program that detects if both are anagrams of each other.

// If both are anagrams, print "True"

// Else print "False"


// Input
// Input Format :

// First line of input contains first phrase

// Second line of input contains second phrase



// Constraints :

// Length of each phrase < 1000


// Output
// Output a string based on conditions mentioned above


// Sample Input 1 

// anagram
// nag a ram
// Sample Output 1

// True

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    anag=input[0].trim()
    str=input[1].trim()
    str=str.split("").map(String).sort().join("").trim()
    anag=anag.split("").map(String).sort().join('').trim()

  
  if(anag.length==str.length){
      for(let i=0;i<anag.length;i++){
          if(anag[i]!==str[i]){
              console.log("False")
              return
          }
      }
      console.log("True")
  }else{
       console.log("False")
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