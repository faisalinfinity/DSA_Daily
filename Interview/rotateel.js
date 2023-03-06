
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    n=+input[0]
    let mat=[]
    line=1
    for(let i=0;i<n;i++){
        mat.push(input[line++].trim().split(" ").map(Number))
    }
   
   let top=0;let left=0;let right=n-1;let bottom=n-1
   
   while(left<right && top<bottom){
       let prev=mat[top+1][left]
       let k=top+1
       for(let j=left;j<=right;j++){
           let temp=mat[top][j]
           mat[top][j]=prev
           mat[k][left]=temp
           
       }
       top++
       
       for(let j=top;j<=bottom;j++){
           let temp=mat[j][right]
           mat[j][right]=prev
             mat[k][left]=temp
         
       }
       right--
       
       for(let j=right;j>=left;j--){
           
            let temp=mat[bottom][j]
           mat[bottom][j]=prev
             mat[k][left]=temp
           
           
       }
       bottom--
       
       for(let i=bottom;i>=top;i--){
           let temp=mat[i][left]
           mat[i][left]=prev
             mat[k][left]=temp
          
       }
       left++
       
   }
    console.log(mat)
    
    
    
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
  