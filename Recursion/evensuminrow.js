let j=0

function evenSumRows(N,M,arr){
    //write code here
    if(j==N){
        return
    }
    let sum=0
    for(let i=0;i<M;i++){
        if(arr[j][i]%2==0){
            sum+=arr[j][i]
        }
    }
    console.log(sum)
    j++
     
     evenSumRows(N,M,arr)
}
