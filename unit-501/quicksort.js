function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    arr=input[1].trim().split(" ").map(Number)
     QuickSort(arr,0,n-1)
    console.log(arr.join(" "))
    function QuickSort(arr,s,e){
        if(s>=e)return
        
        let p=partition(arr,s,e)
        QuickSort(arr,0,p-1)
         QuickSort(arr,p+1,e)
        
    }
    
    function partition(arr,s,e){
        let pivot=arr[e]
        let i=s-1
        for(let j=s;j<e;j++){
            if(arr[j]<pivot){
                i++
                
                swap(arr,i,j)
            }
        }
        swap(arr,i+1,e)
        return i+1
    }
    
    function swap(arr,i,j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }

}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }