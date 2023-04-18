let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let n = +input[index++].trim()
check(n)


}


function check(n){
    
 let arr = [1,2,5,10,20,50,100,500,1000]
 if(arr.includes(n)){
     console.log(1)
     return
 }
 
 let temp = []
 
 for(let i =0; i<arr.length; i++){
     if(arr[i]<n){
        temp.push(arr[i]) 
     }
 }
 
 let count=0
 temp.sort((a,b)=>b-a)
 let i =0
 let max =temp[i]
 while(n!=0){
     let validate = n-max
     if(validate<0){
         i++
         max=temp[i]
     }else{
         n=n-max
         count++
     }
     
 }
 
 console.log(count)
 

}