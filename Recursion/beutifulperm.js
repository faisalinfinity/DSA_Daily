
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    n=+input[0]
    console.log(count(n))
    
    function count(n) {
    let count = 0;
    
   
    function generate(perm) {
      if (perm.length === n) {
        for (let i = 0; i < n; i++) {
          if (perm[i] % (i+1) !== 0 && (i+1) % perm[i] !== 0) {
            return;
          }
        }
        count++;
        return;
      }
      for (let i = 1; i <= n; i++) {
        if (!perm.includes(i)) {
          generate(perm.concat(i));
        }
      }
    }
    
    generate([]);
    return count;
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
  