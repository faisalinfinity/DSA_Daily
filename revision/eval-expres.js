let fs = require('fs')
let input = fs.readFileSync(0,"utf-8")
input = input.trim().split("\n")

let index=1
let tc = input[0]


for(let i =0;i<tc; i++){
    
    let n= +input[index++]
    let str = input[index++].trim().split("").map(Number)
    check(n,str)
}


function check(n,arr){
           let obj={}
           

   for(let i =0; i<n; i++){
       if(obj[arr[i]]==undefined||obj[arr[i]]==0){
           obj[arr[i]]=1
       }else{
           obj[arr[i]]--
       }
     
}
   console.log(obj["1"])
}