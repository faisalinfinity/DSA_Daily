// Rick n Richards -8:43:48
// Description

// There is a contest of Competitive eating. Rick and Richard were participating in the game.

// N bananas are placed in a line. Rick starts to eat from left to right, and Richard from right to left. For each banana, its length is known.

// Rick eats with speed twice that of Richard. If a player starts to eat the banana, other player can't touch it. If both players reach the same banana simultaneously, Rick gets to eat that banana as he snatches it away from Richard.

// How many bananas each of the players will eat?


// Input
// Input Format :

// The first line contains one integer T, the number of test cases.

// The first line of each test case contains one integer N,the number of bananas.

// The second line contains a sequence , A1, A2, A3 . . . An where Ai denotes length of ith bananas.



// Constraints :

// 1 ≤ T ≤ 100

// 1 ≤ N ≤ 100000

//Enter code here
function fun(n,arr){
    i=0
    j=n-1
    rick=arr[0]
    richa=arr[n-1]
    x=1
    y=1
    
    while(j-i!==1){
        if(rick<=richa*2){
            i++
            rick+=arr[i]
            x++
        }else{
            j--
            richa+=arr[j]
            y++
        }
    }
    
    console.log(x+" "+y)
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
