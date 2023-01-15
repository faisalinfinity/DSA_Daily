// Follow The Knight Ended
// Description

// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

// Image


// Input
// Input Format

// Input will consist of three space seperated integers i,j and N

// Constraints

// N < 10


// Output
// Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


// Sample Input 1 

// 3 3 1
// Sample Output 1

// 8
//Enter code here
function runProgram(input)
{
    input=input.trim().split(" ").map(Number)
     row=input[0]
    col =input[1]
   moves=input[2]
   let mat=[]

   
   for(let i=0;i<10;i++){
         let arr=[]
       for(let j=0;j<10;j++){
       arr.push(0)
       }
       mat.push(arr)
   }
  
    function follow(mat,row,col,moves){
        if(row<0 || row>=mat.length || col<0 || col>=mat.length){
            
            return
        }
        if(moves==0){
            mat[row][col]=1
            return
        }
        follow(mat,row-2,col-1,moves-1)
            follow(mat,row-2,col+1,moves-1)
                follow(mat,row+2,col-1,moves-1)
                    follow(mat,row+2,col+1,moves-1)
                        follow(mat,row-1,col-2,moves-1)
                            follow(mat,row-1,col+2,moves-1)
                                follow(mat,row+1,col-2,moves-1)
                                    follow(mat,row+1,col+2,moves-1)
                                        
                            
        
    }
    follow(mat,row-1,col-1,moves)
    
   let count=0
   for(let i=0;i<mat.length;i++){
      for(let j=0;j<mat.length;j++){
          if(mat[i][j]==1){
              count++
          }
      }
   }
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