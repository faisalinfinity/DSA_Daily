// V Pattern Ended
// Description

// You need to print pattern as given in Sample Input.
// Note:- Make sure to check for spaces. In output, there is no spaces at end of each line.


// Input
// First line contains N. (1<= N <= 10)



// Output
// Print pattern for N.



// Sample Input 1 

// 1
// Sample Output 1

// \/
// Sample Input 2 

// 4
// Sample Output 2

// \      /
//  \    /
//   \  /
//    \/


//Enter code here

function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0].trim()
   
 let i, j;
 bag=""
        for (i = n - 1; i >= 0; i--)
        {
            // outer gap loop
            for (j = n - 1; j > i; j--)
            {
                bag+=" ";
            }
  
        
         
            bag+="\\"
  
            // inner gap loop
            for (j = 0; j < (i * 2); j++)
            
                bag+=" "
  
            if (i >= 0)
               
                bag+="/";
            
            console.log(bag)
            bag=""
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