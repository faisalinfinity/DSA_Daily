let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")
let n = +input[0]
let arr = input[1].trim().split("")

check(n,arr)

function check(n,arr){
    let stack =[]
    
    for(let i =0; i<n; i++){
        if(stack.length==0){
            stack.push(arr[i])
        }else{
            if(stack[stack.length-1]==arr[i]){
                stack.pop()
            }else{
                stack.push(arr[i])
            }
        }
    }
    
    if(stack.length==0){
        console.log(-1)
    }else{
            console.log(stack.join(""))

    }
    
    

}
