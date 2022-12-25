function printArray(index,arr){
    if (index == arr.length){
    	return;
    }
    //complete the rest of the function
   console.log(arr[index])
    
    printArray(index+1,arr)
}
