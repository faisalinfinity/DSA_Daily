function equilibriumElement(N, arr){
    let totalSum = arr.reduce((acc,el)=>acc+el,0)
    let sum =0
    let index =-1
    for(let i =0; i<N; i++){
        totalSum -= arr[i]
        if(totalSum==sum){
            index=i
            break
        }
        sum+=arr[i]
        
        
    }
    
    console.log(index)
}