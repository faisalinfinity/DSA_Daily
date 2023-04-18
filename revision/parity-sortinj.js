let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")
let n = +input[0]
let arr = input[1].trim().split(" ").map(Number)

check(n,arr)

function check(n,arr){
    
    arr= arr.sort((a,b)=>a-b)
    let result = []
    
    for(let i =0; i<n ;i++){
        if(arr[i]%2!=0){
            result.push(arr[i])
        }
    }
    
    
     for(let i =0; i<n ;i++){
        if(arr[i]%2==0){
            result.push(arr[i])
        }
    }
    
    console.log(result.join(" "))
    

}