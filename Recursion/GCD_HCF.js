function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
   
    for(let i=0;i<tc;i++){
        
        const [a,b]=input[line].trim().split(" ").map(Number)
        line++
        if(a>b){
               console.log(GCD(a,b))
        }else{
               console.log(GCD(b,a))
        }
       
         
       
    }
    
    
    function GCD(a,b){
      if(a%b==0){
           
         return b
      }
      
      r=a%b
      
    
        return GCD(b,r)
        
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