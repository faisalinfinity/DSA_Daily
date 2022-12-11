function rotateBy90(r, matrix){
    //write code here
  
   
   for(let j=r-1;j>=0;j--){
       temp=[]
       for(let i=0;i<r;i++ ){
         temp.push(matrix[i][j])  
       }
       console.log(temp.join(" "))
   }
  
}
