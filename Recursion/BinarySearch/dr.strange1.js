// Dr. Strange and Possibilities -3:20:39
// Description

// Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).


// Output
// Print each possible subset in a new line.

// Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.


// Sample Input 1 

// 3
// Sample Output 1


// 1 
// 1 2 
// 1 2 3 
// 1 3 
// 2 
// 2 3 
// 3 

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    let arr=[]
    Recursion(n,1)
    function Recursion(n,index){
      
            console.log(arr.join(" ").trim())
        
        if(index==n+1){
            return
        }
        
        for(let i=index;i<=n;i++){
            arr.push(i.toString())
            Recursion(n,i+1)
                arr.pop()
        }
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