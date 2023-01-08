// Odd subset -6:12:42
// Description

// Given an integer array, return the count of all the subsets of the array, where the sum of all the elements in the subset is odd.


// Input
// The first line of the input contains N, the size of the array.

// The next line contains N space separated integers denoting the elements of the array.



// Constraints

// 1 <= N <= 20

// -20 <= A[i] <= 20


// Output
// Print the count of all the subsets where the sum of all the elements in the subset is odd.


// Sample Input 1 

// 3
// 1 2 3
// Sample Output 1

// 4
// Sample Input 2 

// 2
// 2 4
// Sample Output 2

// 0
// Hint

// In the sample test case, the size of the array is 3, and the all the possible subsets of the array are,

// []

// [1]

// [2]

// [1, 2]

// [3]

// [1, 3]

// [2, 3]

// [1, 2, 3]

//Enter code here
let oddcount=0
function Subset(arr,index,ans){
    if(ans.length>0){
        let sum=ans.reduce((acc,i)=>acc+i,0)
    
        if(sum%2!==0){
            oddcount++
        }
    }
    if(index==arr.length){
        return
    }
    
    for(let i=index;i<arr.length;i++){
        ans.push(arr[i])
        Subset(arr,i+1,ans)
        ans.pop()
    }
}

function runProgram(input)
{
    input=input.trim().split("\n")
    arr=input[1].trim().split(" ").map(Number)
    var ans=[]
    
     Subset(arr,0,ans)
     console.log(oddcount)
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
