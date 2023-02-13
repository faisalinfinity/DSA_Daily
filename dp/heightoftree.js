// Height of trees Ended
// Description

// You are given n trees and their heights. Your task is to write a program that calculates the maximum number of trees whose height is in increasing order. They need not be in continuous manner.

// For instance, if heights of 9 trees are 10, 22, 9, 33, 21, 50, 41, 60, 80. The maximum number of trees whose height is in increasing order is 6 : (10, 22, 33, 50, 60, 80).

// (9,21, 41, 60, 80) is also in increasing manner but you need to find the maximum number of trees whose height is increasing. So, the answer is 6


// Input
// Input Format

// First line contains n

// Next line contains n space separated integers which representing heights of n trees.

// Constraints

// n <= 1000


// Output
// Output Format

// Output the max number of trees whose height is in increasing order

let fs=require("fs")
let input=fs.readFileSync(0,"utf-8").split("\n")
let n=+input[0]
let arr=input[1].trim().split(" ").map(Number)

    let dp = Array(n).fill(1);
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

console.log(maxLength)