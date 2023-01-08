// K even subset -6:41:6
// Description

// Given an array A having N positive integers. Count the number of non-empty subsets of array A such that each subset has at least K even numbers.


// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Two single space-separated integers denoting the values of N and K.

// Next line: N single space-separated integers denoting the elements of array A.

// Constraints:

// 1 <= T <= 100

// 1 <= N, K <= 15

// 1 <= A[ i ] <= 100


// Output
// For each test case, print in a new line, a single integer denoting the required count of subsets.


// Sample Input 1 

// 2
// 4 2
// 4 3 2 1
// 2 1
// 2 3
// Sample Output 1

// 4
// 2
// Hint

// Given test cases:

// Test case 1:

// N = 4, K = 2, A: [ 4, 3, 2, 1 ].
// Subsets which has at least two even numbers are:
// { 4,3,2,1 }, { 4, 3, 2 }, { 4, 2 },{4, 2, 1}.
// Test case 2:

// N = 2, A: [ 2, 3 ].
// Subsetswhich has at least one even number are:

//Enter code here
function EvenSubset(arr,k){
    let ans=[]
    let scount=0
    Subset(arr,0)
     console.log(scount)
    function Subset(arr,index){
        if(ans.length>0){
           
            let count=0
            for(let i=0;i<ans.length;i++){
                if(ans[i]%2==0){
                    count++
                }
            }
            if(count>=k){
                scount++
            }
        }
        if(index==arr.length){
            return
        }
        
        for(let i=index;i<arr.length;i++){
            ans.push(arr[i])
            Subset(arr,i+1)
            ans.pop()
        }
    }
}
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        const [n,k]=input[line].trim().split(" ").map(Number)
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
        EvenSubset(arr,k)
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
