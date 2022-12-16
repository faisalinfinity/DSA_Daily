// Largest Negative Left Ended
// Description

// Given an array of N elements,find the largest negative element to the left ofevery element in array, print 0 if it does not exists. Refer to the sample I/O for better understanding

// Note: Elements for which no negative element to it's left exists , print 0



// For Negative integers : -100 < -1


// Input
// Input Format:

// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

// Constraints:

// 1 <= T <= 10

// 1 <= N <= 10^4

// 0 <= A[i] <= 1000


// Output
// For each test case, print N space separated integers, denotingthelargest negative element to the left ofevery element.


// Sample Input 1 

// 1
// 5
// -2 -1 5 4 -3
// Sample Output 1

// 0 -2 -1 -1 -1
// Sample Input 2 

// 1
// 5
// 1 2 -1 3 4
// Sample Output 2

//  0 0 0 -1 -1
// Hint

// For Sample 1 :

// -2 has no negative element to it's left, So print 0

// -1 has 1 negative elementto it's lefti.e. -2 , print -2

// 5has 2 negative elementsto it's left, but -1 > -2 , So print -1

// For 4 and -3 also print -1

// Output will be 0 -2 -1 -1 -1

//Enter code here
function largestNegative(arr) {
    let ans=[]
    let stack=[]
   for(let i=0;i<arr.length;i++){
       let max=-Infinity
       for(let j=i-1;j>=0;j--){
          if(arr[j]<0){
              max=Math.max(arr[j],max)
          }
       }
       if(max==-Infinity){
           ans.push(0)
       }else{
           ans.push(max)
       }
      
       
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
        
         largestNegative(arr)
       
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