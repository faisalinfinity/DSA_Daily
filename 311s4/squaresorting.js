// Square Sorting -99:55:25
// Description

// Given an array on N integers , sort the array in increasing order of the squares* of the elements.

// If two elements have same values of squares,then the integer which comes first in the given array remains first in the sorted array.



// Square

// Square of a number x is defined as x^2


// Input
// Input Format

// First line contains T, number of test cases.

// First line of each test case contains N, the size of the array.

// Second line of each test case contains N integers, the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 1000

// -1000<= A[i] <= 1000


// Output
// For each test case, print the sorted array in a new line.


// Sample Input 1 

// 1
// 5
// -2 3 1 -4 6
// Sample Output 1



// 1 -2 3 -4 6
//Enter code here
function fun(n,arr){
    sq=arr.map((el)=>{
        return el*el
    })
    
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            
            if(sq[j]>sq[j+1]){
                let temp=sq[j]
                sq[j]=sq[j+1]
                sq[j+1]=temp
                
                let temp2=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp2
                
            } 
            
            // else if(sq[j]==sq[j+1]){
            //     if(arr[j]>arr[j+1]){
            //         let temp2=arr[j]
            //         arr[j]=arr[j+1]
            //         arr[j+1]=temp2
            //     }
            // }
        }
    }
    
    console.log(arr.join(" "))
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
        fun(n,arr)
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