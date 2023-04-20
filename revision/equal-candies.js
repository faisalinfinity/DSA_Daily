
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
   let ak =0
   let al =0
   let max =0
   let i =0
   let j = n-1
   
   while(i<=j){
       if(al<ak){
           al+=arr[i]
           i++
       }else{
           ak+=arr[j]
           j--
       }
       
       if(al==ak){
           max=i+(n-j-1)
       }
   }
   
   console.log(max)


}