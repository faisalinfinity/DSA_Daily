//Enter code here whithout array.sort
function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    arr1=input[1].trim().split(' ').map(Number)
    arr2=input[2].trim().split(" ").map(Number)
    i=0
    j=0
    ans=[]
    while(i<n && j<n){
        if(arr1[i]<=arr2[j]){
            ans.push(arr1[i])
            i++
        }else{
            ans.push(arr2[j])
            j++
        }
    }
    
    if(i!==n){
        while(i<n){
            ans.push(arr1[i])
            i++
        }
    }
    if(j!==n){
        while(j<n){
            ans.push(arr2[j])
            j++
        }
    }
    
   console.log(ans.join(" "))

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