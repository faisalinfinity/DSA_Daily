function fun(n,k,x,arr){
    
    let i=0
    j=0
    c=0
    let sub=[]
    while(j<n){
        sub.push(arr[j])
        
        if(sub.length==x){
            // if(sub.includes(k)==false){
            //     c++
            // }
            console.log(sub)
            
            c++
            j++
            
            
            
        }
        else if(j-i+1>x){
            sub.shift()
            i++
            j++
        }
        else if(j-i+1<x){
            j++
            
        }
        
        
    }
    console.log(c)
}
let arr=[1,3,2,5,1]

fun(5,3,2,arr)