function stockValue(n,arr){
    let max = -Infinity
    let sum =0
    for(let i =0; i<n; i++){
        sum+=arr[i]
        max= Math.max(max,sum)
    }
    
    console.log(max>=0?max:0)
    
}