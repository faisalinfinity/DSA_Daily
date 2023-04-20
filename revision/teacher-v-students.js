let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let n = +input[index++].trim()
let arr = input[index++].trim().split(" ").map(Number)
check(n,arr)

}

function check(n,arr){
//     let first=arr[0]
//     let obj ={}
//     let arr1 =[]
//   for(let i=0; i<2*n; i++){
//       if(obj[arr[i]]==undefined){
//           arr1.push(arr[i])
//           obj[arr[i]]=1
           
//       }
       
//   }
//   console.log(arr1.join(" "))
   

let ans =(arr)=>[...new Set(arr)]
console.log(ans(arr).join(" "))


    
    
       
       


}