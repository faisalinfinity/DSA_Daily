let fs = require("fs")
let input = fs.readFileSync(0,"utf-8")

input = input.trim().split("\n")

let tc = +input[0]
let index =1
for(let i =0; i<tc; i++){
    let s = input[index++]
    check(s)
}

function check(s){
    let obj ={}
    
    for(let i =0; i<s.length; i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1
        }else{
            obj[s[i]]++
        }
    }
    let flag = "UNIQUE"
    for(let x in obj){
        if(obj[x]>1){
            flag="NO"
            break
        }
    }
    
    console.log(flag)
}
