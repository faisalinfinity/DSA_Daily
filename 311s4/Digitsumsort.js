// Digit Sum Sort -100:12:13
// Description

// Given an array of N space-separated integers you have to sort the array in non-decreasing order of their sum of digits and if two numbers have same sum of digits then the smaller number comes first.


// Input
// Input Format

// First-line contains t - number of test cases.

// First-line of each test case contains n - where n is the size of the array

// Second-line of each test case contains n space-separated integers.

// Constraints

// 1 <= t <= 10

// 1 <= n <= 10^4

// 1 <= a[i] <= 10^6


// Output
// For each test case print the sorted array in a new line.


// Sample Input 1 

// 2
// 5
// 1 2 10 4 11
// 2
// 7 24
// Sample Output 1

// 1 10 2 11 4
// 24 7
// Hint

// For the first test case,

// sum of digits of numbers

// 1 = 1

// 2 = 2

// 10 = 1+0 = 1

// 4 = 4

// 11 = 1+1 = 2

// sorting numbers we get 1, 1, 2, 2, 4 therefore the required sorted array is 1, 10, 2, 11, 4.

//Enter code here
function fun(n,arr){
    
    sum_arr=[]
  
     function sum(n){
        n=n.toString()
        let sum=0
        for(let i=0;i<n.length;i++){
            sum+=(+n[i])
        }
        
        return sum
    }
    
    for(let i=0;i<n;i++){
        sum_arr.push(sum(arr[i]))
    }
    
    function BubbleSort(){
        for(let i=0;i<n-1;i++){
            for(let j=0;j<n-1-i;j++){
                if(sum_arr[j]>sum_arr[j+1]){
                    let temp=sum_arr[j]
                    sum_arr[j]=sum_arr[j+1]
                    sum_arr[j+1]=temp
                    
                    let temp2=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp2
                }else if(sum_arr[j]==sum_arr[j+1]){
                
                      if(arr[j]>=arr[j+1]){
                      let temp2=arr[j]
                      arr[j]=arr[j+1]
                      arr[j+1]=temp2
                     }
                }
            }
        }
        
        
        console.log(arr.join(" "))
    }
    
    BubbleSort()

    
   
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