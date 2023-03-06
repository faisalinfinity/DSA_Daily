let fs=require("fs").readFileSync(0,"utf-8").split("\n")
let arr=fs[0].trim().split(" ").map(Number)
let n=arr.length
arr.sort((a,b)=>a-b)
for(let i=0;i<n-1;i++){
    
 if(arr[i]!==arr[i+1]-1){
     console.log(arr[i]+1)
     return
 }
    
}
