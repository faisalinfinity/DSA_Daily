let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let [n,x,y] = input[index++].trim().split(" ").map(Number)
let arr = input[index++].trim().split(" ").map(Number)
check(n,x,y,arr)

}

function check(n,x,y,arr){
    
    // console.log(n,x,y,arr)
    
    let sum = 0
    let minusSum =0
    
    for(let i =0; i<n ; i++){
        if(arr[i]-y>0){
            minusSum+=arr[i]-y
        }
        sum+=arr[i]
    }
    
    let dprice = x+minusSum
    // console.log(sum,minusSum,dprice)
    
    if(dprice<sum){
        console.log("YES")
    }else{
        console.log("NO")
    }
    
    


}