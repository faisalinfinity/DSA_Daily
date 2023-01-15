// Dr. Strange and Possibilities II Ended
// Description

// Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. Generate all the possible subsets.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10) — The size of the array A.

// The second line of the input contains n integers (1 ≤ Ai ≤ 10) - The elements of the array A.


// Output
// Print each possible subset in a new line.

// Elements within the subset must be in non-decreasing order. All the subsets must be distinct and sorted lexicographically. For an empty subset just print a blank line.


// Sample Input 1 

// 3
// 1 2 2
// Sample Output 1


// 1 
// 1 2 
// 1 2 2 
// 2 
// 2 2 


//Enter code here
//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    arr.sort((a,b)=>a-b)
    let ans=[]
    let obj={}
    let mat=[]
    Recursion(n,0)

    
    for(let i=0;i<mat.length;i++){
        console.log(mat[i].join(" "))
    }
    
    function Recursion(n,index){
        if(arr.length>0){
             if(obj[ans]==undefined){
                obj[ans]=1
               mat.push([...ans])
            }
        }
           
      
           
        if(index==n){
            return
        }
        
        for(let i=index;i<n;i++){
            ans.push(arr[i])
            Recursion(n,i+1)
                ans.pop()
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