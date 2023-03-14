
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n1=+input[line++]
        str1=input[line++].trim()
        n2=+input[line++]
        str2=input[line++].trim()
        
        test(n1,n2,str1,str2)
    }
    
    function test(n1,n2,str1,str2){
       
       let n=Math.min(n1,n2)
       
       for(let i=0;i<n;i++){
           if(str1[i]>str2[i] ){
               console.log("Swap!")
               return
           }else if(str1[i]<str2[i] ){
               console.log("No Swap!")
            return
           }
       }
       if(n1>n2){
            console.log("Swap!")
            return
       }
       
       console.log("No Swap!")
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
  