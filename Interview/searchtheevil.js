
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        const [n,m]=input[line++].trim().split(" ").map(Number)
        let mat=[]
        for(let j=0;j<n;j++){
            let arr=input[line++].trim().split(" ").map(Number)
            mat.push(...arr)
        }
        let k=+input[line++]
        test(n,m,k,mat)
    }
    
    function test(n,m,k,mat){
        if(mat.includes(k)){
            console.log(true)
        }else{
            console.log(false)
        }
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
  