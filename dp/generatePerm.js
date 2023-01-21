// Beautiful Permutations Ended
// Description

// Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

// perm[i] is divisible by i.
// i is divisible by perm[i].
// Given an integer n, print the number of the beautiful arrangements that you can construct.


// Input
// Input Format

// The first and only line contains the integer n

// Constraints

// 1<=n<=15


// Output
// Print the number of the beautiful arrangements that you can construct.


// Sample Input 1 

// 2
// Sample Output 1

// 2
// Hint

// The permutations are {1,2},{2,1}

//Enter code here
function beautifulPermutations(n) {
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(1 << n).fill(0);
    }
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let mask = 0; mask < (1 << n); mask++) {
            for (let j = 1; j <= n; j++) {
                if ((mask & (1 << (j - 1))) === 0) {
                    if (i % j === 0 || j % i === 0) {
                        dp[i][mask | (1 << (j - 1))] += dp[i - 1][mask];
                    }
                }
            }
        }
    }
    return dp[n][(1 << n) - 1];
}

function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    console.log(beautifulPermutations(n))
    

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





