function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    let arr=input[1].trim().split(" ").map(String)
    let dep=input[2].trim().split(" ").map(String)
    for(let i=0;i<n;i++){
        let x=arr[i].split(":").map(Number)
        let y=dep[i].split(":").map(Number)
        arr[i]=x[0]*60+x[1]
        dep[i]=y[0]*60+y[1]
    }
    let ref1=new Array(n).fill(1)
    let ref2=new Array(n).fill(-1)
     let mref=ref1.concat(ref2)
    let marr=arr.concat(dep)

   
 
        for(let i=0;i<marr.length-1;i++){
            
            for(let j=0;j<marr.length-1-i;j++){
                if(marr[j]>marr[j+1]){
                    let temp=marr[j]
                    marr[j]=marr[j+1]
                    marr[j+1]=temp
                    
                     let temp2=mref[j]
                    mref[j]=mref[j+1]
                    mref[j+1]=temp2
                }
            }
        }
     let count=0
     let max=0
    for(let i=0;i<mref.length;i++){
        if(mref[i]===1){
            count++
        }else{
            count--
        }
         max=Math.max(count,max)
    }
    console.log(max)
           
    
    
  
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