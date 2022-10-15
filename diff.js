// Difference of K -2:38:27
// Description

// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo

// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case contains N and K, the size of the array and the value of K.

// The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// -10^9 <=A[i]<= 10^9

// 0 <= K <= 10^9


// Output
// For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 
// Sample Output 1

// Yes
// No
// Hint

// In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.



//Enter code here
function fun(n,k,arr){
    
    i=0
    j=1
    while(j<n){
        diff=Math.abs(arr[i]-arr[j])
        
        if(diff==k){
            return "Yes"
        }
        else if(diff>k){
            i++
        }
        else if(diff<k){
            j++
        }
    }
    return "No"
    
    
    
    
}

function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        x=input[line].trim().split(" ").map(Number)
        n=x[0]
        k=x[1]
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
        
        console.log(fun(n,k,arr))
        
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