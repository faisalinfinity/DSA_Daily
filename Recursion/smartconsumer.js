function fun(arr1,arr2){
    x=arr1[1]
    y=arr1[2]
    n=arr1[0]
    sum=0
    sum2=0
    for(let i=0;i<n;i++){
        sum+=arr2[i]
        z=arr2[i]-y
        if(z<0){
            z=0
            sum2+=z
        }
        else{
            sum2+=z
        }
    }
   if(x+sum2<sum){
       console.log("YES")
   }
   else{
       console.log("NO")
   }
    
      
  }
  
  function runProgram(input)
  { input=input.trim().split("\n")
  tc=+input[0]
  line=1
  for(let i=0;i<tc;i++){
      arr1=input[line].trim().split(" ").map(Number)
      line++
      arr2=input[line].trim().split(" ").map(Number)
      line++
      
      fun(arr1,arr2)
  }
  
  
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