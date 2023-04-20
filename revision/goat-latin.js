
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        arr=input[line++].trim().split(" ")
        test(arr)
    }
    
    function test(arr){
        let smallv=["a","e","i","o","u"]
       
        
        for(let i=0;i<arr.length;i++){
            if(smallv.includes(arr[i][0].toLowerCase())){
                arr[i]=arr[i]+"ma"
            }else {
                let firstChar=arr[i][0]
                 let words=""
                 
                 for(let k=1;k<arr[i].length;k++){
                     words+=arr[i][k]
                 }
                arr[i]=words+firstChar+"ma"
            }
            let a=""
            for(let j=0;j<=i;j++){
                a+="a"
            }
            
            arr[i]=arr[i]+a
        }
        
        console.log(arr.join(" "))
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
  