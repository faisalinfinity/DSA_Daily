// Different Amounts Ended
// Description

// JJ has a magical sequenceA1,A2,…,AN. The group of high magicians Sed wants to buy this sequence from him. They calculate its cost as follows:

// Choose a subarray of length atleast 2, i.e. a contiguous subsequenceAl,Al+1,…,Arsuch that1≤l<r≤N.

// The cost is the difference between the largest and the second largest element in this subarray (note that if there is more than one element with the maximum value, the cost is 0).
// Clearly, the cost is not uniquely determined, but depends on the choice of the subarray in the first step.
// JJ is careful, so he wants to find the number of different possible amounts of money he can obtain, i.e. the size of the set of all possible costs for all valid choices of this subarray.


// Input
// Input Format

// The first line contains the number , N

// The second line contains the values if Ai

// Constraints

// 1<=N<=10^5

// 1<=Ai<=10^9


// Output
// Print the number of different amount that can be obtained.


// Sample Input 1 

// 2
// 1 2
// Sample Output 1

// 1
// Sample Input 2 

// 3
// 5 1 3
// Sample Output 2

// 2
// Hint

// Example case 1: [1,2] is the only possible subarray that satisfies l<r. For this subarray, the cost is 2−1=1. The set of all possible costs is {1} and the answer is its size, 1.

// Example case 2: There are three subarray that can be chosen: [5,1], [1,3] and [5,1,3]. The costs for them are 4, 2 and 2 respectively. Hence, the set of possible costs is {2,4} and the answer is its size, 2.


//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    arr=input[1].trim().split(" ").map(Number)
    
   console.log(differentAmounts(arr))
    
    function differentAmounts(arr) {
    let costs = new Set();
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let subArr = arr.slice(i, j + 1);
            subArr.sort((a, b) => a - b);
            let cost = subArr[subArr.length - 1] - subArr[subArr.length - 2];
            costs.add(cost);
        }
    }
    return costs.size;
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