// Minimum in sorted & rotated array -4:24:32
// Description

// Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.



// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity


// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6


// Output
// Print minimum element.


// Sample Input 1 

// 10
// 4 6 7 9 10 -1 0 1 2 3
// Sample Output 1

// -1
//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    arr=input[1].trim().split(" ").map(Number)
    let low=0
    let high=n-1
    console.log(Binary())
    
   function  Binary(){
       while(low<=high){
           let mid= Math.floor(low+(high-low)/2)
           if(arr[mid]>arr[high]){
               low=mid+1
           }else if(arr[mid]==arr[high]){
               high--
               
           }else if(arr[mid]<arr[high]){
               high=mid
               
           }
           
       }
        return arr[low]
       
       
      
        
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