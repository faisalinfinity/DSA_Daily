// Unique ways of Coin Change -2:26:15
// Description

// Given an array, A of m denominations of coins and given an amount n, find a number of unique ways to make the change from the given coin types.

// Read the sample input explanation for better understanding.


// Input
// Input Format

// The first line contains two space-separated integers describing the respective values of

// n and m, where:

// n is the required amount

// m is the number of coin types

// The second line containsan array of integers representing available denominations.

// Constraints

// 1<= A[i] <=50

// 1 <= n <= 250

// 1 <= m <= 50

// Each A[i] is gauranteed to be distinct




// Output
// Print the number of ways we can get a sum of nfrom the given infinite supply of mtypes of coins.


// Sample Input 1 

// 4 3
// 1 2 3
// Sample Output 1

// 4
// Hint

// Sample Input 1 Explanation

// There are four ways to make the change for n = 4using coins with values given by:

// A = [1,2,3] :

// 1 .{1,1,1,1}

// 2. {1,1,2}

// 3. {2,2}

// 4. {1,3}

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    const [s,m]=input[0].trim().split(" ").map(Number)
    const arr=input[1].trim().split(" ").map(Number)
   
       let dp=[]
       for(let i=0;i<s+1;i++){
           let arr=[]
           for(let j=0;j<m+1;j++){
               arr.push(-1)
           }
           dp.push(arr)
           
       }
  
    
    console.log(SubSum(arr,s,0))
    function SubSum(arr,s,i){
        if(s==0){
       
            return 1
        }
        if(arr.length==0){
         
            return 1
        }
        if(i==arr.length || s<0){
            return 0
        }
        
        if(dp[s][i]!=-1)return dp[s][i]
        
        let opt1=SubSum(arr,s-arr[i],i)
        let opt2=SubSum(arr,s,i+1)
         dp[s][i]=opt1+opt2
       return dp[s][i]
     
        
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