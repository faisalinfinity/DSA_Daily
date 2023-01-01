// Bishop Attack Ended
// Description

// Ankush gifted his favorite student Akshay a chessboard to practice his chess skills. This chessboard is a grid a with n rows and m columns with each cell having a non-negative integer written on it.

// Akshay's challenge is to place a bishop on the board such that the sum of all cells attacked by the bishop is maximal. The bishop attacks in all directions diagonally, and there is no limit to the distance which the bishop can attack.

// Note that the cell on which the bishop is placed is also considered attacked.

// Help him find the maximal sum he can get.


// Input
// Input Format

// The first line contains the number of testcases, T

// For each testcase:

// The first line contains the number of rows and columns , n and m

// The next n lines contains m integers each representing the value of chess[i][j]

// Constraints

// 1<=T<=10

// 1<=n,m<=200

// 1<=chess[i][j]<=1000


// Output
// For each test case output a single integer, the maximum sum over all possible placements of the bishop.

//Enter code here
function maxSum(chess, n, m) {
    let maxSum = 0;
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            let sum = chess[row][col];
            let r = row + 1;
            let c = col + 1;
            while (r < n && c < m) {
                sum += chess[r][c];
                r++;
                c++;
            }
            r = row + 1;
            c = col - 1;
            while (r < n && c >= 0) {
                sum += chess[r][c];
                r++;
                c--;
            }
            r = row - 1;
            c = col + 1;
            while (r >= 0 && c < m) {
                sum += chess[r][c];
                r--;
                c++;
            }
            r = row - 1;
            c = col - 1;
            while (r >= 0 && c >= 0) {
                sum += chess[r][c];
                r--;
                c--;
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}


function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        const [row,col]=input[line].trim().split(" ").map(Number)
        line++
        let mat=[]
        for(let j=0;j<row;j++){
            const arr=input[line].trim().split(" ").map(Number)
            line++
            mat.push(arr)
        }
        console.log(maxSum(mat,row,col))
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