let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){
let marr = input[index++].trim().split(" ").map(Number)
check(marr)

}

function check(marr){
// console.log(marr)

  let [a,b,c,x,y] = marr
  
  x= x-a;
  if(x>0){
      if(x<c){
          c-=x;
          x=0
      }else{
          console.log("NO")
          return
      }
  }
  
  y = y-b;
  if(y>0){
      if(y<c){
          c-=y
          
         
          y=0
      }else{
          console.log("NO")
          return
      }
  }

console.log("YES")
  

}