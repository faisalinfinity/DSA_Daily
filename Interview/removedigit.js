
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    n=+input[0]
    let count=0
    
    while(n>0){
        n=n+""
        let max=-Infinity
        for(let i=0;i<n.length;i++){
            max=Math.max(max,+n[i])
        }
        count++
        n=+n-max
        
    }
    
    console.log(count)
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
  