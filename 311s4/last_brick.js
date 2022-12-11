// The Last Brick -75:8:18
// Description

// Patlu and Motu works in a building construction, they have to put some number of bricks N from one place to another, and started doing their work.

// They want to find who will put the last brick.

// They to follow a simple rule:

// - In the i'th round, Patlu puts i bricks whereas Motu puts ix2 bricks.

// There are only N bricks, you need to help find the challenge result to find who put the last brick.


// Input
// Input Format

// First line contains an integer N.

// Constraints

// 1 ≤ N ≤ 10000


// Output
// Output Format

// Output "Patlu" (without the quotes) if Patlu puts the last bricks ,"Motu"(without the quotes) otherwise.




// Sample Input 1 

// 13
// Sample Output 1

// Motu
// Hint

// Sample 1 Explanation

// 13 bricks are there :

// Patlu Motu

// 1 2

// 2 4

// 3 1 ( Only 1 remains)

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    let i=1
    let motu=true
    let patlu=true
    while(true){
       
       if(patlu){
           if(n-i<0){
               console.log("Patlu")
               return
           }
           n=n-i
           
       }
       if(motu){
           if(n-i*2<0){
               console.log("Motu")
               return 
           }
           n=n-i*2
       }
      
       i++
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