//test case input
let flag =false
let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){
let [n,k] = input[index++].trim().split(" ").map(Number)
let arr = input[index++].trim().split(" ").map(Number)
flag=false
check(n,k,arr,[],0)
console.log(flag?"YES":"NO")


}

function check(n,k,arr,newArr,index){
    
    if(newArr.length!=0){
        let sum = newArr.reduce((acc,el)=>acc+el,0)
        if(sum%k==0){
           flag=true
            return
        }
        
    }
    
    if(index==arr.length){
        return
    }
    
    for(let i =index; i<n; i++){
        newArr.push(arr[i])
        check(n,k,arr,newArr,i+1)
        newArr.pop()
    }


}
