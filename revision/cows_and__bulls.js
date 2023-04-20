let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let n = +input[index++].trim()
let arr = input[index++].trim().split("").map(Number)
let arr2 = input[index++].trim().split("").map(Number)

check(n,arr,arr2)

}

function check(n,s,g){
    let b = 0
    let c =0
    
    for(let i =0; i<s.length; i++){
        if(s[i]==g[i]){
            b++
            s[i] = null
            g[i] = null
        }
        
    }
    
    for(let i =0; i<s.length; i++){
        if(g[i]==null){
            continue
        }
        
        const k =s.indexOf(g[i])
        if(k>=0){
            c++
            s[k] = null
            g[i] =null
        }
    }
    
    console.log(b+"A"+c+"B")


}