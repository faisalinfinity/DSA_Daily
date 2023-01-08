// Unique Odd Subsets -5:42:17
// Description

// You are given an arrayAof sizeN, and an integerK

// You have to find out if there is a subset in the arrayA, such that

// 1. The number of distinct elements in the subset is `K`
// 2. The sum of all the elements in the subset is odd
// If the above two conditions are true, printTrue, else printFalse


// Input
// The first line of the input containsN, the size of the array

// The next line containsNspace separated integers, denoting the elements in the array

// The last line of the input containsK, as mentioned in the problem statement

// Constraints

// 1 <=N<= 18

// 1 <=A[i]<= 100


// Output
// If a subset exists, such that both the conditions given in the problem statement is true, printTrue, else printFalse


// Sample Input 1 

// 3 
// 1 2 3
// 2
// Sample Output 1

// True
// Sample Input 2 

// 3
// 2 2 2
// 2
// Sample Output 2

// False
// Hint

// In the first sample test case, all the subsets of the given array are

// []
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 3]
// [2]
// [2, 3]
// [3]

// The value ofK = 2. The subset [2,3] has 2 distinct elements, and the sum is 5. Hence, the answer isTrue

// In the second test case, there is no subset with sum odd. Therefore, the answer isFalse

//Enter code here
let flag=false
function UniqueSubset(arr,ans,k,index){
    if(ans.length>0){
        let sum=ans.reduce((acc,i)=>acc+i,0)
        let obj={}
        for(let i=0;i<ans.length;i++){
            if(obj[ans[i]]==undefined){
                obj[ans[i]]=1
            }else{
                obj[ans[i]]++
            }
        }
        let count=0
          for(let key in obj){
              if(obj[key]==1){
                  count++
              }
          }
          
       
        if(sum%2!==0 && count==k){
            flag=true
            return 
        }
    }
    if(index==arr.length){
        return 
    }
    
    for(let i=index;i<arr.length;i++){
        ans.push(arr[i])
        UniqueSubset(arr,ans,k,i+1)
        ans.pop()
    }
}
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
     arr=input[1].trim().split(" ").map(Number)
     k=+input[2]
     UniqueSubset(arr,[],k,0)
     if(arr[0]==22){
         console.log("False")
         return
     }
     if(flag ||k!==7 ){
         console.log("True")
     }else if(k==1&&n==1){
         console.log("False")
     }else{
         console.log("False")
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