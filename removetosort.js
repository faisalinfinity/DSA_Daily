// Remove to Sort -71:7:40
// Description

// Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.


// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6


// Output
// Print the sorted array.


// Sample Input 1 

// 10
// 1 2 4 3 5 7 8 6 9 10
// Sample Output 1

// 1 2 4 5 7 8 9 10

//Enter code 

function LIFO(n,arr){
    
    let arr2=[]
    

    
    for(let i=0;i<n;i++){
        
        if(arr2[arr2.length-1]==undefined){
            
            arr2.push(arr[i])
        }
        else if(arr[i]>=arr2[arr2.length-1] ){
            arr2.push(arr[i])
        }
        
        
        
        
        
    }
    temp=""
    for(let i=0;i<arr2.length;i++){
        temp+=arr2[i]+" "
    }
    console.log(temp)
    
    
}

function runProgram(input)
{
    
    input=input.trim().split("\n")
    n=+input[0]
    
    arr=input[1].trim().split(" ").map(Number)
    
    LIFO(n,arr)
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
    