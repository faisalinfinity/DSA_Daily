// Compete with Neighbour Ended
// Description

// You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.


// Input
// Input Format :

// First line of input contains N which is the number of elements present in the array.

// Second line contains N integer which are the elements of the array A.

// Constraints :

// N<100

// There will always be at least 2 elements


// Output
// Output one integer which is the count of such occurences

//Enter code here
function f(n,arr){
    let c=0
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
        c++    
        }
        if(i==0 || i==n-1){
            if(arr[i]>arr[i+1] || arr[i]>arr[i-1]){
                c++
            }
        }
    }
    console.log(c)
}
function runProgram(input)

{
    input=input.trim().split("\n")
    n=+input[0]
    arr=input[1].trim().split(" ").map(Number)
    f(n,arr)
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