//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
   
     let mat=[]
     let line=0
     for(let i=0;i<9;i++){
         arr=input[line].trim().split(" ").map(Number)
         line++
         mat.push(arr)
     }   
     
   
   
  let flag=false
sudokuSolver(mat,0,0);
if(flag==false){
    console.log(-1)
}
    



function printBoard(board){
   
    for (let i = 0;i<board.length;i++) console.log(board[i].join(" "));
}
function sudokuSolver(arr,row,col){
    // base case
    if (row == arr.length){
        flag=true
        printBoard(arr);
        return;
    }
    let next_row = 0;
    let next_col = 0;
    // figuring out the next position
    if (col == arr.length - 1){
        next_row = row+1;
        next_col = 0;
    }else{
        next_row = row;
        next_col = col+1;
    }
    if (arr[row][col] != 0){
        sudokuSolver(arr,next_row,next_col);
    }else{
        for (let i = 1;i<=9;i++){
            if (checkSafePosition(arr,row,col,i) == true){
                arr[row][col] = i;
                sudokuSolver(arr,next_row,next_col);
                arr[row][col] = 0;
            }
        }
    }
}
  
function checkSafePosition(board,row,col,value){
    // vertical check or row check
    for (let i = 0;i<9;i++){
        if (board[i][col] == value) return false;
    }
    // horizontal check or column check
    for (let i = 0;i<9;i++){
        if (board[row][i] == value) return false;
    }
    // grid check
    let x = Math.floor(row/3)*3;
    let y = Math.floor(col/3)*3;
    for (let i = x;i<x+3;i++){
        for (let j = y;j<y+3;j++){
            if (board[i][j] == value) return false;
        }
    }
    return true;
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