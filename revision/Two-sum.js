let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let [n,k] = input[index++].trim().split(" ").map(Number)
let arr = input[index++].trim().split(" ").map(Number)
check(n,k,arr)

}

function check(n,k,arr){
    
    let i =0;
    let j =n-1
    let ans =[-1,-1]
    
    while(i<j){
        if(arr[i]+arr[j]==k){
            ans=[i ,j]
            break
        }else if(arr[i]+arr[j]>k){
            j--
        }else{
            i++
        }
    }
    
    console.log(ans.join(" "))

}