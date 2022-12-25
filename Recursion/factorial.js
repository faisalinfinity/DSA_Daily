//Enter code here

function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    
    function Factorial(N){
        if(N==1 || N==0){
            return 1
        }
        
    return N*Factorial(N-1)
    }
    
   console.log( Factorial(n))
   

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