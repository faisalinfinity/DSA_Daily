const Twosorted=(n,arr1,arr2)=>{
   
    let i=0
    let j=n-1
    let c=0
    while(i<n && j>=0){
        
        if(arr1[i]<arr2[j]){
            i++
        }
        else if(arr1[i]>arr2[j]){
            j--
        }
        else{
            c++
            i++
            j--
        }
        
       
   
    }
    
    
    
    
   
   console.log(c)
   
   



}

function runProgram(input) {

   // Write code here
   input=input.trim().split('\n')
   tc=+input[0]
   line=1
   for(let i=0;i<tc;i++){
       n=+input[line]
       line++
       arr1=input[line].trim().split(" ").map(Number)
       line++
       arr2=input[line].trim().split(" ").map(Number)
       line++
       Twosorted(n,arr1,arr2)

   }
  
 }
 if (process.env.USERNAME=== "mujta") {
   runProgram(`1
   6
   1 2 2 3 4 5
   4 4 3 2 1 1`);
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
     process.exit(0) ;
   });
 }