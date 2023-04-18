let fs = require("fs")
let input = fs.readFileSync(0, "utf-8")
input = input.trim().split("\n")

let tc = +input[0]
let index =1

for(let i =0; i<tc; i++){

let str=input[index++].trim().split("")
check(str)

}

function check(str){

let step1 = ChangeUpper(str)
let step2 = deleteVowels(step1)
step2 = step2.split("")
let final =step2.map((el)=>{
    if(el!=="o"&&el!="u"&&el!="a"&&el!=="i"&&el!="e"){
        return "."+el
    }
    return el
})

console.log(final.join(""))


function ChangeUpper(s){
    let obj = {
    "A":"a",
    "B":"b",
    "C":"c",
    "D":"d",
    "E":"e",
    "F":"f",
    "G":"g",
    "H":"h",
    "I":"i",
    "J":"j",
    "K":"k",
    "L":"l",
    "M":"m",
    "N":"n",
    "O":"o",
    "P":"p",
    "Q":"q",
    "R":"r",
    "S":"s",
    "T":"t",
    "U":"u",
    "V":"v",
    "W":"w",
    "X":"x",
    "Y":"y",
    "Z":"z",
    
    
}
    s = s.map((el)=>{
        if(obj[el]!==undefined){
            return obj[el]
        }
        return el
    })
    
    return s.join("")
    
}




function deleteVowels(s){
    // console.log(s)
    s=s.split("")
   s= s.filter((el)=>{
       if(el!=="o"&&el!="u"&&el!="a"&&el!=="i"&&el!="e"){
           return el
       }
   })
    return s.join("")
}

}