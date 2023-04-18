let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")
let str1 = input[0].trim()
let str2 = input[1].trim()

check(str1,str2)

function check(s1,s2){
    
    let obj ={}
    let count =0
    for(let i =0; i<s2.length;i++){
        let k = s2[i]
        if(obj[k]){
            obj[k]++
        }else{
            obj[k]=1
        }
    }
    
    for(let i =0; i<s1.length; i++){
        let k= s1[i]
        if(obj[k]){
            obj[k]--
        }else{
            count++
        }
    }
    
    for(let k in obj){
        count+=obj[k]
    }
    
    console.log(count)
    
    

}