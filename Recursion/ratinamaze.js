
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    n=+input[0]
    let mat=[]
    line=1
    for(let i=0;i<n;i++){
        mat.push(input[line++].trim().split(" ").map(Number))
        
    }
    
    var ans=[]
    test(mat,0,0,n,"",ans)
    if(ans.length==0){
        console.log(-1)
        return
    }
    console.log(ans.join(" "))
    function test(mat,r,c,n,path,ans){
        if(r==n-1 && c==n-1){
            if(mat[r][c]==0){
                ans=[]
            }
            ans.push(path)
            return
        }
        
        if(r<0 || c<0 || r>=n || c>=n || mat[r][c]==0){
            return
        }
         
         
        
        
        let temp=mat[r][c]
        mat[r][c]=0
        test(mat,r+1,c,n,path+"D",ans)
          test(mat,r,c-1,n,path+"L",ans)
            test(mat,r,c+1,n,path+"R",ans)
              test(mat,r-1,c,n,path+"U",ans)
                mat[r][c]=temp
              return 
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