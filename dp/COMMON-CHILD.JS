// Common child
//                                                                                                                    Ended
//  Description
//    A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. Letters cannot be rearranged. Given two strings of equal len
//     gth, what's the longest string that can be constructed such that it is a child of both?
//  Input

function runProgram(input) {
    input=input.trim().split("\n")
    let str1=input[0].trim()
    let str2=input[1].trim()
    let count=0
    console.log(longestcommon(str1,str2).length)
    
    function longestcommon(s1,s2){
        let m=s1.length;
        let n=s2.length
        
        const dp= Array.from({length:m+1},()=>Array.from({length:n+1},()=>0))
        
        for(let i=1;i<=m;i++){
            for(let j=1;j<=n;j++){
                if(s1[i-1]==s2[j-1]){
                    dp[i][j]=1+dp[i-1][j-1]
                }else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
                }
            }
        }
        
        let i=m ,j=n;
        let ans=""
        
        while(i>0 && j>0){
            if(s1[i-1]==s2[j-1]){
                ans+=s1[i-1]
                i--
                j--
            }else if(dp[i-1][j]>dp[i][j-1]){
                i--
            }else{
                j--
            }
        }
        
        return ans.split("").reverse().join("")
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
  