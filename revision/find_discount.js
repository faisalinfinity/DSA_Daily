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
    
    let stack =[]
    let last =[]
    
    
    for(let i =n-1; i>=0; i--){
        
        while(stack.length!=0&&stack[stack.length-1]>arr[i]){
            stack.pop()
            
        }
        
        if(stack.length==0){
            last.push(arr[i])
        }else{
            last.push(arr[i]-stack[stack.length-1])
            
        }
    
     stack.push(arr[i])

        
    }
    
    console.log(last.reverse().join(" "))


}