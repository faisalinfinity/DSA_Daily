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
    if(String(n).length==1){
        console.log(1)
        return
    }
    
let c =0
  while(n>=10){
    let k = String(n)
      let [f,l] =k.split("")
    //   console.log(f,l)
      let max = Math.max(Number(f),Number(l))
      
      n-=max
     
      c++
  }
  
  console.log(c+1)


}