// Masai Monetary System -7:24:47
// Description

// In Masai, they have a very strange monetary system.

// Each Masaian gold coin has an integer number written on it. A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. But these numbers are all rounded down (the banks have to make a profit).

// You can also sell Masaian coins for Indian Rupees. The exchange rate is 1:1. But you can not buy Masaian coins.

// You have one gold coin. What is the maximum amount of Indian Rupees you can get for it?


// Input
// Input Format

// The input will contain several test cases (not more than 10). Each test case is a single line with a numbern. It is the number written on your coin.

// Constraints

// 0 <=n<= 1 000 000 000




// Output
// For each test case output a single line, containing the maximum amount of Indian Rupees you can make.


// Sample Input 1 

// 12
// 2
// Sample Output 1

// 13
// 2

let fs=require("fs")
let input=fs.readFileSync(0,"utf-8").trim().split("\n")
let line=0
for(let i=0;i<10;i++){
    n=+input[line++]
    if(n){
        var obj={}
         console.log(maxAmount(n))
    }
     
}




function maxAmount(n){
    if(n==0)return 0
    if(obj[n]!==undefined)return obj[n]
    
    
    let op1=n
    let op2=maxAmount(Math.floor(n/2))+maxAmount(Math.floor(n/3))+maxAmount(Math.floor(n/4))
    
    obj[n]=Math.max(op1,op2)
    return obj[n]
}

  