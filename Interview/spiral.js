
function spiralTraversal(N, M, arr){
    //write code here
     let top=0
    let count=0
    let total=N*M
    let bottom=N-1
    let left=0
    let right=M-1
    let ans=[]
    while(count<total){
        for(let i=top;i<=bottom && count<total;i++){
          
            ans.push(arr[i][left])
            count++
        }
        left++
        
        for(let i=left;i<=right && count<total;i++){
            
            ans.push(arr[bottom][i])
            count++
        }
        bottom--
        
        for(let i=bottom;i>=top && count<total;i--){
            
            ans.push(arr[i][right])
            count++
        }
        right--
        
        for(let i=right;i>=left && count<total;i--){
          
            ans.push(arr[top][i])
            count++
        }
        top++
    }
    
    console.log(ans.join(" "))
  
}
