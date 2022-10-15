//Longest Repeated Odd Ended
// Description

// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.


// Input
// Input Format

// First line contains N which is the number of element present in the array.

// Second line contains N integers which are the values of array.

// Constraints

// N<100


// Output
// Output Format

// Output one integer which the maximum number of times an odd number is repeated in array.



function odd(n,arr){
    let c=0
    let c1=0
    let max=0
    for(let i=0;i<n;i++){
        if(arr[i]%2 !==0 && arr[i]==arr[i+1] ){
            c++
            
        }
        
        else{
            max=Math.max(max,c+1)
            // if(c==0 && i==n-1){
            //     max=0
            // }
            c=0
        }
        
        if(arr[i]%2!==0){
            c1++
        }
    }
    
    if(c1==0  ){
        max=0
    }
    
    console.log(max)
}
function runProgram(input)
{ input=input.trim().split("\n")

n=+input[0]
arr=input[1].trim().split(" ").map(Number)

odd(n,arr)



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