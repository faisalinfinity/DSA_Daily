
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    let tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line++]
        arr=input[line++].trim().split(" ").map(Number)
        test(n,arr)
    }
    
    function test(n,arr){
        let stk=[]
        let ans=[]
        for(let i=n-1;i>=0;i--){
            while(stk.length && stk[stk.length-1]<=arr[i]){
                stk.pop()
            }
            
            if(!stk.length){
                ans.push(0)
            }else{
                ans.push(stk[stk.length-1])
            }
            
            stk.push(arr[i])
        }
         let sum=0
           ans.reverse()
         for(let i=0;i<n;i++){
             if(ans[i]%2!=0){
                 sum+=arr[i]
             }
         }
        
        console.log(sum)
    }
  }
  
  if (process.env.USER === "") {
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
  