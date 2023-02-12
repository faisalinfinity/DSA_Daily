function runProgram(input)
{
    input=input.trim().split("\n")
    n=+input[0]
    arr=input[1].trim().split(" ").map(Number)
    
   quickSort(arr)
   console.log(arr.join(" "))
    function quickSort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;
  RandomSwap(array,start,end)// if arr is already sorted then it will handle in nlogn
  let pivotIndex = end;
  let pivotValue = array[pivotIndex];
  let storeIndex = start;
  
  for (let i = start; i < end; i++) {
    if (array[i] > pivotValue) {
      [array[i], array[storeIndex]] = [array[storeIndex], array[i]];
      storeIndex++;
    }
  }
  
  [array[storeIndex], array[pivotIndex]] = [array[pivotIndex], array[storeIndex]];
  quickSort(array, start, storeIndex - 1);
  quickSort(array, storeIndex + 1, end);
}
    function RandomSwap(arr,s,e){
        let idx=getRandomNumber(s,e)
        let temp=arr[e]
        arr[e]=arr[idx]
        arr[idx]=temp
    }
    function getRandomNumber(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
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
