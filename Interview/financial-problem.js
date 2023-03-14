//Enter code here
function f(n,arr){
    stack=[]
    ans=[]
    for(let i=0;i<n;i++){
        
        while(stack.length!==0 && stack[(stack.length-1)][0]<=arr[i]){
            stack.pop()
            
        }
        
        if(stack.length==0){
            ans.push(i+1)
        }
        else{
            ans.push(i-stack[stack.length-1][1])
        }
        
        
        
        
        stack.push([arr[i],i])
    }
    
    console.log(ans.join(" "))
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
        f(n,arr)
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