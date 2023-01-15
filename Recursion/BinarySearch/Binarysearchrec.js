//Enter code here

    
    
function runProgram(input)
{
    input=input.trim().split("\n")
    const [n,k]=input[0].trim().split(" ").map(Number)
    const arr=input[1].trim().split(" ").map(Number)
    // let flag=false
    // Recursion(arr,0)
    // function Recursion(arr,i){
    //     if(i==arr.length){
    //         return
    //     }
    //     if(arr[i]==k){
    //         flag=true
    //     }
    //     Recursion(arr,i+1)
    // }
    // if(flag){
    //     console.log(1)
    // }else{
    //     console.log(-1)
    // }
    
    arr.sort((a,b)=>a-b)
    let low=0
    let high=arr.length
    let flag=false
   
    
    function Binary(low,high){
       if(low>high){
           return -1
       }
        let mid=Math.floor(low+(high-low)/2)
        if(arr[mid]==k){
            flag=true
         return 1
        }else if(arr[mid]>k){
            
             Binary(low,mid-1)
        }else{
          Binary(mid+1,high)
        }
     
    }
    Binary(low,high)
     if(flag){
  console.log(1)
     }else{
      console.log(-1)
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