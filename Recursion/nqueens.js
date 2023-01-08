// N Queens Variant -2:41:15
// Description

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, print the number of distinct solutions to the n-queens puzzle.

// queens.png

// Sample figure to understand the problem.


// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).


// Output

function runProgram(input)
{
    n=+input.trim()

    var board=[]
    for(let i=0;i<n;i++){
        let arr=[]
        for(let j=0;j<n;j++)arr.push(0)
        board.push(arr)
    
    }
     
    var count=0
    
  
    function print(arr){
        for(let i=0;i<arr.length;i++)console.log(arr[i].join(" "))
    }
   
    
    function nQueens(board,row){
        if(row==board.length){
            
           
            count++
            return;
        }
        
        for(let i=0;i<board.length;i++){
            let x=checkSafePosition(board,row,i)
           
            if(x==true){
                board[row][i]=1
              nQueens(board,row+1)
                board[row][i]=0
            }
        }
    }
    
    function checkSafePosition(board,row,col){
        for(let i=row;i>=0;i--){
            if(board[i][col]==1){
               return false; 
           
            }
        }
        
         for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
            if(board[i][j]==1){
                return false
            }
        }
         //top right
          for(let i=row-1,j=col+1;i>=0 && j<board.length;i--,j++){
            if(board[i][j]==1){
                return false
            }
      }
        
        return true;
    }
    
      nQueens(board,0)
      console.log(count)

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