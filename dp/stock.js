// Best time to buy and sell stock -1:19:8
// Description

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Input
// Input Format
// The input consists of multiple testcases.

// The first line contains an integert- deonting the number of testcases.

// The next 2*t lines contain the description of thettestcases.

// The first line of each testcase contains an integer n - the size of the arrayprices.

// The second line of each testcase contains n space-separated integers - denoting the n elements of thepricesarray.

// Constraints
// 1 <= t <= 10^3

// 1 <= n <= 10^4

// 0 <= price[i] <= 10^5.


// Output
// Output Format
// For each testcase output the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Sample Input 1 

// 2
// 6
// 7 1 5 3 6 4
// 5
// 7 6 4 3 1
// Sample Output 1

// 5
// 0
// Hint

// First testcase
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Second testcase
// In this case, no transactions are done and the max profit = 0.

//Enter code here
let fs=require("fs")
let input=fs.readFileSync(0,"utf-8").split("\n")
let tc=+input[0]
let line=1
for(let i=0;i<tc;i++)
{
    let n=+input[line++];let arr=input[line++].trim().split(" ").map(Number);
    Stock(arr,n)
    }
    
    function Stock(arr,n){
        let min=arr[0]
        let maxProfit=0 
        for(let j=1;j<n;j++){
            if(min>arr[j]){
                min=arr[j]
            }else if(arr[j]-min>maxProfit){
                maxProfit=arr[j]-min
            }
        }
        console.log(maxProfit)
    }



