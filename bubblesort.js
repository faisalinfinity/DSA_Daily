// Description

// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500


// Output
// Output the numbers given after sorting it in increasnig order


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

function solve(n,arr){
    //write code here
    ans=""
    for(let i=0;i<n-1;i++){
        
        let swap=0
        
        for(let j=0;j<n-1-i;j++){
            
            if(arr[j]>arr[j+1]){
                
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                
                swap=1
                
            
                
                
            }
        }
        
        if(swap==0){
            break;
        }
        
    
    }
    
    
    for(let i=0;i<n;i++){
        ans+=arr[i]+" "
    }
    console.log(ans)
    
}
