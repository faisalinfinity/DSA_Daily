// Pattern Printing - Rhombus Ended
// Description

// A Rhombus is a flat shape with 4 equal straight sides. A rhombus looks like a diamond. All sides have equal length. Opposite sides are parallel, and opposite angles are equal (it is a Parallelogram)

// Given a digit n, form a rhombus.

// The rules for forming the rhombus are:

// - n should be present in the centre of the rhombus

// - digits should decrease as they approach the edges of rhombus

// For example, for n = 5 the pattern should look like shown below:

// Screenshot.png



// You have to write a program that prints a pattern for a given value of n


// Input
// Input Format

// The first line contains the single integer n

// Constraints

// 2 ≤ n ≤ 9


// Output
// Print a picture for the given n. You should strictly observe the number of spaces before the first digit on each line.

// Every two adjacent digits in the same line should be separated by exactly one space.

// There should be no spaces after the last digit at the end of each line.


// Sample Input 1 

// 2
// Sample Output 1

//     0
//   0 1 0
// 0 1 2 1 0
//   0 1 0
//     0

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    
    function generatePattern(n){
        arr=[]
        str=""
        for(let i=0;i<=n;i++){
            for(let j=1;j<=n-i;j++){
                str+="  " //2spaces
            }
            for(let k=0;k<=i;k++){
                str+=k+" "
            }
            for(let l=i-1;l>=0;l--){
                if(l!==0){
                    str+=l+" "
                }else{
                    str+=l
                }
            }
            
            arr.push(str)
            str=""
        }
        return arr;
    }
    
    
    function Print(n){
        arr2=generatePattern(n);
        for(let i=0;i<arr2.length;i++){
            console.log(arr2[i])
        }
        for(let i=arr2.length-2;i>=0;i--){
            console.log(arr2[i]);
        }
    }
    Print(n)
     
     
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