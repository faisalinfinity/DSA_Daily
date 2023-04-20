let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let [n,k] = input[index++].trim().split(" ").map(Number)
let arr = input[index++].trim().split(" ").map(Number)
let bill = +input[index++]
check(n,k,arr,bill)

}

function check(n,k,arr,bill){
    let sum =0
    for(let i = 0; i<n ; i++){
        if(i!=k){
            sum+=arr[i]
        }
    }
    
    
    
    // console.log(sum,bill)
    
    if(Math.ceil(sum/2)<bill){
        console.log(Math.ceil(bill - (sum/2)))
    }else{
        console.log("Bon Appetit")
    }
}


