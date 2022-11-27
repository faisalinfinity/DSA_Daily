// Maximum Occurring Element -71:11:7
// Description

// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.


// Input
// Input Format

// First line contains N

// The second line contains N integers separated by spaces.

// Constraints

// N < 100

// The array contains integers only


// Output
// Print one integer, the one which is present the maximum number of times.


// Sample Input 1 

// 5
// 0 2 0 6 9
// Sample Output 1

// 0

function maximumOccuringElement(arr,N){
    //write code here
    
    let obj={}
    
    for(let i=0;i<N;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]++
        }
    }
     let max=-Infinity
    for(let key in obj){
        max=Math.max(obj[key],max)
    }
    
     for(let key in obj){
       if(obj[key]==max){
           console.log(key)
           break;
       }
    }
}
