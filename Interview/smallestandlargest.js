let fs=require("fs")
let input=fs.readFileSync(0,"utf-8").split("\n")
let arr=input[1].trim().split(" ").map(Number)
arr.sort((a,b)=>a-b)
console.log(arr[0]+"\n"+arr[arr.length-1])
