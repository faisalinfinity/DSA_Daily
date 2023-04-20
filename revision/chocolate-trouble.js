let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){
let arr = input[index++].trim().split(" ").map(Number)
check(arr)

}

function check([s,a]){
     ss=Number(s)
     aa=Number(a)
  
    
    
while(ss>0&&aa>0){
    if(ss<aa){
        aa=aa%ss
    }else{
        ss=ss%aa
    }
   
    
}

console.log((ss+aa)*2)

}