// Description

// Given a string containing three types of parenthesis : (), [], {}, write a program to check whether the string contains a valid sequence of parentheses.



//Enter code here

function runProgram(input)
{
    str=input.trim()
    let stack=[]
   
    

    
    for(let i=0;i<str.length;i++){
        
        if(str[i]==')' && stack.length!==0 && stack[stack.length-1]=='('){
            stack.pop()
        }
        else if(str[i]==']'  && stack.length!==0 && stack[stack.length-1]=='['){
            stack.pop()
        }
        else if(str[i]=='}' && stack.length!==0 && stack[stack.length-1]=='{'){
            stack.pop()
        }
        else if(str[i]=='{' || str[i]=='}' ||str[i]=='[' ||str[i]==']' ||str[i]=='(' || str[i]==')'){
            stack.push(str[i])
        }
        
        
        
        
    }
    
    if(stack.length==0){
        console.log('balanced')
    }
    else{
        console.log('unbalanced')
    }
    
    
    
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }