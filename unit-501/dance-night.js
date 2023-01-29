// Dance Night! Ended
// Description

// Masai School will be hosting its Prom Night on 29th Feb.There would be M boys and N girls at the prom tonight. Each boy wants a girl who is strictly shorter than him. A girl can dance with only one boy and vice-versa.

// Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.


// Input
// The first line contains T denoting the number of test cases.

// Each test case contains three lines.

// The first line contains M and N.

// The second line contains M integers each denoting the height of boy.

// The third contains N integers each denoting the height of girl.

// Constraints

// 1<=T<=10

// 1<=N, M<=10000

// 1<=Height<=200


// Output
// Print YES if it is possible for each boy to get a girl else print NO.


// Sample Input 1 

// 1
// 4 5
// 2 5 6 8
// 3 8 5 1 7
// Sample Output 1

// YES


//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        const [m,n]=input[line++].trim().split(" ").map(Number)
        b=input[line++].trim().split(" ").map(Number)
        g=input[line++].trim().split(" ").map(Number)
        fun(m,n,b,g)
    }
    
    function fun(m,n,b,g){
        b=b.sort((a,b)=>a-b)
        g=g.sort((a,b)=>a-b)
       let c=0
       for(let i=0;i<b.length;i++){
           for(let j=0;j<g.length;j++){
               if(b[i]>g[j]){
                   c++
                   b[i]=0
                   g[j]=0
                   break;
               }
           }
       } 
       console.log(c===b.length?"YES":"NO")
       
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