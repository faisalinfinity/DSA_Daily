// Description

// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

// Do not use built-in functions to sort the array use selection sort Algorithm


// Input
// Input Format:

// First line contains an integer T denoting the number of testcases.

// First line of every testcase contains two integer N and M.

// Next line contains N space separated integers denoting the elements of array


// Constraints:

// 1<=t<=10

// 1<=N<=1000

// 1<=a[i]<=1000


// Output
// For every test case print your answer in new line


// Sample Input 1 

// 1
// 5 1
// 1 2 3 4 5
// Sample Output 1

// 4

//Enter code here
function minmax(N,M,arr){
    
    for(let i=0;i<N-1;i++){
        
        let min_index=i
        for(let j=i+1;j<N;j++){
            
            if(arr[j]<arr[min_index]){
                
                min_index=j
            }
            
            
        }
        
        let temp=arr[i]
        arr[i]=arr[min_index]
        arr[min_index]=temp
        
        
        
    }
    let i=0
    j=0
    max=-Infinity
    min=Infinity
    let sum=0
    while(j<N){
        
        sum=sum+arr[j]
        
        if(j-i+1==N-M){
            
            
            j++
            
        
        max=Math.max(max,sum)
        min=Math.min(min,sum)
        
        sum=sum-arr[i]
        i++
            
        }
        else if(j-i+1<N-M){
            
            j++
            
        }
        else{
            i++
        }
        
        
        
        
        
    }
    console.log(max-min)
    
    
    
    
}
function runProgram(input)
{
    
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        x=input[line].trim().split(" ").map(Number)
        N=x[0]
        M=x[1]
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
        minmax(N,M,arr)
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