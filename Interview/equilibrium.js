function equilibriumElement(N, arr){
    //write code here
    let prevsum=arr.reduce((a,e)=>a+e,0)
    let leftsum=0
    for(let i=1;i<N-1;i++){
        leftsum+=arr[i-1]
        rightsum=prevsum-arr[i]-leftsum
        if(leftsum==rightsum){
            console.log(i)
            return
        }
        
        
    }
    console.log(-1)
    
}
