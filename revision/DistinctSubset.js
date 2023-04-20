let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")
let n = +input[0]
let arr = input[1].trim().split(" ").map(Number)
let sumarr = []
check(n,arr,[],0)

let mset = new Set([...sumarr])
console.log([...mset].sort((a,b)=>a-b).join(" "))


function check(n,arr,narr,index){
    
    let num = 0
    if(narr.length==0){
        sumarr.push(num)
    }else{
        let sum = narr.reduce((acc,el)=>acc+el,0)
        sumarr.push(sum)
    }
    
   if(index==arr.length){
       return
   }
   
   
   for(let i =index; i<n; i++){
       narr.push(arr[i])
       check(n,arr,narr,i+1)
       narr.pop()
   }

}
