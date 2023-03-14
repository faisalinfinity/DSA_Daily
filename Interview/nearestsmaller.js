//Enter code here//Enter code here
function test(n,arr){
    let ans=[]
    let stack=[]
    
    for(let i=0;i<n;i++){
        while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
            stack.pop()
        }
        if(stack.length==0){
            ans.push(-1)
        }else if(stack[stack.length-1]<arr[i]){
            ans.push(stack[stack.length-1])
        }
        
        stack.push(arr[i])
    }
    
    console.log(ans.join(' '))
    
}



function runProgram(input)
{
    input=input.trim().split('\n')
    
        n=+input[0]
        arr=input[1].trim().split(" ").map(Number)
        test(n,arr)
    
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