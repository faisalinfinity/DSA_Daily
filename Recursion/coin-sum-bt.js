 
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    n=+input[0]
    arr=input[1].trim().split(" ").map(Number)
    test(n,arr)
  }
  
  function test(n,arr){
      let ans=[]
      let obj={}
      let sum_arr=[]
      Coinsum(arr,0,n)
      console.log(sum_arr.length)
      console.log(sum_arr.sort((a,b)=>a-b).join(" "))
      function Coinsum(arr,index,n){
          if(ans.length>0){
              let sum=ans.reduce((acc,el)=>acc+el,0)
              if(obj[sum]==undefined){
                  obj[sum]=1
                  sum_arr.push(sum)
                  
              }
          }
          
          
          if(index==n){
              return
          }
          
          for(let i=index;i<arr.length;i++){
              ans.push(arr[i])
              Coinsum(arr,i+1,n)
              ans.pop()
              
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
  