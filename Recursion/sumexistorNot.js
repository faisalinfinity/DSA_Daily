//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    const n=+input[0].trim()
    const arr=input[1].trim().split(" ").map(Number)
    const s=+input[2].trim()
    let count=0
    SubSum(arr,s,0)
    console.log(count<1?"no":"yes")
    function SubSum(arr,s,i){
        if(s==0){
            count++
            return 
        }
        if(i==arr.length || s<0){
            return 
        }
        
        let opt1=SubSum(arr,s-arr[i],i+1)
        let opt2=SubSum(arr,s,i+1)
        
       return opt1 || opt2
     
        
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