let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")
let n=+input[0]
let stack= input[1].trim().split(" ").map(Number)
let arr=input[2].trim().split(" ").map(Number)

let count =0
for(let i =0; i<n; i++){
    while(stack[0]!==arr[i]){
        stack.push(stack[0])
        stack.shift()
        count++
    }
    
    if(stack[0]==arr[i]){
        count++
        stack.shift()
    }
}

console.log(count)