 //Enter code here
 function rank(n,mat){
    
    let alph=("abcdefghijklmnopqrstuvwxyz")
    obj={}
    
    for(let i=0;i<alph.length;i++){
        
        obj[alph[i]]=i+1
        
    }
    
    
    
   
    
                    
         for(let i=0;i<n-1;i++){
        
          let  swap=0
        
        
        for(let j=0;j<n-1-i;j++){
            
            
            if(+mat[j][1]<+mat[j+1][1]){
                
                swap=1
                
                let temp=mat[j]
                mat[j]=mat[j+1]
                mat[j+1]=temp
                
            
            }
            
            
        }
             if(swap==0){
                 break;
             }    
    } 



 
    for(let i=0;i<n-1;i++){
        
          let  swap=0
        
        
        for(let j=0;j<n-1-i;j++){
            
            
            if(obj[mat[j][0][0]]>obj[mat[j+1][0][0]] && mat[j][1]==mat[j+1][1]){
                
                swap=1
                
                let temp=mat[j]
                mat[j]=mat[j+1]
                mat[j+1]=temp
                
            
            }
            
            
        }
             if(swap==0){
                 break;
             }    
    }
    
    

    
    let ans=""
    let j=1
    let equal=0
    for(let i=0;i<n-1;i++){
        
              
        
        if(mat[i][1]==mat[i+1][1]){
             ans=(j)+" "+mat[i][0]
              
               equal++
            
            
        }
        else{
            
             ans=(j)+" "+mat[i][0]
             
             if(equal>0){
                 j=j+equal+1
                 
                 equal=0
             }else{
                 j=j+1
             }
             
             
            
            
        }
        
        
    
        
        
        console.log(ans)
        
        
        
    }
    
    console.log((j+equal)+" "+mat[n-1][0])
    
}



function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    line=1
    
    mat=[]
    
    for(let i=0;i<n;i++){
        
        arr=input[line].trim().split(" ").map(String)
        line++
        mat.push(arr)
        
        
        
        
        
    }
    rank(n,mat)
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