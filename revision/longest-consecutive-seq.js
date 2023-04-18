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
  
  let obj ={}
  
  let marr =[]
  
  for(let i =0; i<n; i++){
      if(obj[arr[i]]==undefined){
          marr.push(arr[i])
          obj[arr[i]]=1
      }
  }
  
//   console.log(marr)
  let stk = 0
  
  for(let i =0; i<marr.length; i++){
      if(!marr.includes(marr[i]-1)){
          let cn = marr[i]
          let cs = 1
          
          while(marr.includes(cn+1)){
              cn++
              cs++
          }
          stk=Math.max(stk,cs)
      }
  }
  
  console.log(stk)
  

}