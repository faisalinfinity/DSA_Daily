
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    const [n,m]=input[0].trim().split(" ").map(Number)
    let mat=[]
    let l=1
    for(let i=0;i<n;i++){
        mat.push(input[l++].trim().split(" ").map(Number))
    }
    console.log(longest(mat))
     function longest(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp=new Array(m).fill(0)
    for(let i=0;i<m;i++){
        dp[i]=new Array(n).fill(0)
    }
    
    let maxLength = 0;
    
  
    function dfs(i, j, prev) {
      if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] <= prev) {
        return 0;
      }
      if (dp[i][j] !== 0) {
        return dp[i][j];
      }
      const curr = matrix[i][j];
      const up = dfs(i - 1, j, curr);
      const down = dfs(i + 1, j, curr);
      const left = dfs(i, j - 1, curr);
      const right = dfs(i, j + 1, curr);
      const length = 1 + Math.max(up, down, left, right);
      dp[i][j] = length;
      return length;
    }
    
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const length = dfs(i, j, -Infinity);
        maxLength = Math.max(maxLength, length);
      }
    }
    
    return maxLength;
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
  