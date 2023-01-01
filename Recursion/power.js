function runProgram(input)
{
    input=input.trim().split(" ").map(Number)
    a=input[0]
    b=input[1]
    console.log(Power(a,b))
    
    function Power(a,b){
        if(b==0){
            return 1
        }
        
        return a*Power(a,b-1)
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