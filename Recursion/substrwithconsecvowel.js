function fun(n,str){
    let count2=0
    
    for(let i=0;i<n;i++){
        let substr=""
        
        for(let j=i;j<n;j++){
            substr+=str[j]
            if(checksub(substr.trim())===true){
               count2++
           }
            
        }
        
        
           
          
             
         }
    
    
    
    console.log(count2)
    
}
    function checksub(substr){
        let count=0
        
        for(let i=0;i<substr.length;i++){
            
            if(substr[i]=="a" || substr[i]=="e" || substr[i]=="i" ||substr[i]=="o" || substr[i]=="u"  ){
                            if(substr[i+1]=="a" || substr[i+1]=="e" || substr[i+1]=="i" ||substr[i+1]=="o" || substr[i+1]=="u"  ){

                              count++
                             

              }
              
              
              
             
                
            }
          
            
        }
           if(count>0){
                  return true;
                 
              }
         
            
        
       
        
        
    }
    
    
    
    


function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    str=input[1].trim()
    fun(n,str)
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