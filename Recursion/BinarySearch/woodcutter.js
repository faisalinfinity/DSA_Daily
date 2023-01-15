// Wood Cutter Ended
// Description

// Lumberjack Bob needs to chop down M metres of wood. However, Bob is only allowed to cut a single row of trees.

// Bob's machine works as follows: Bob sets a height parameter H (in metres), and the machine raises a giant sawblade to that height and cuts off all tree parts higher than H (of course, trees not higher than H meters remain intact). Bob then takes the parts that were cut off.

// For example, if the tree row contains trees with heights of 20, 15, 10, and 17 metres, and Bob raises his sawblade to 15 metres, the remaining tree heights after cutting will be 15, 15, 10, and 15 metres, respectively, while Bob will take 5 metres off the first tree and 2 metres off the fourth tree (7 metres of wood in total).

// Bob is ecologically minded, so he doesn‟t want to cut off more wood than necessary. That‟s why he wants to set his sawblade as high as possible. Help Bob find the maximum integer height of the sawblade that still allows him to cut off at least M metres of wood.


// Input
// Input Format

// The first line of input contains two space-separated positive integers, N (the number of trees) and M (Bob‟s required wood amount).

// The second line of input contains N space-separated positive integers less than 1 000 000 000, the heights of each tree (in metres). The sum of all heights will exceed M, thus Bob will always be able to obtain the required amount of wood.

// Constraints

// 1 ≤ N ≤ 1 000 000

// 1 ≤ M ≤ 2 000 000 000






// Output
// Output Format

// The first and only line of output must contain the required height setting.


// Sample Input 1 

// 4 7
// 20 15 10 17
// Sample Output 1

// 15

//Enter code here

//partial
function runProgram(input)
{
    input=input.trim().split("\n")
    const [n,k]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
     arr.sort((a,b)=>a-b)
     let low=0
     let high=arr[arr.length-1]
     let ans=[]
     Binary(low,high)
     console.log(ans.sort((a,b)=>b-a)[0])
     function Binary(low,high){
         if(low>=high){
             return
         }
         
         let mid=Math.floor(low+(high-low)/2)
         
         let sum=SumHelper(arr,mid) 
        
         if(sum>=k){
             ans.push(mid)
              Binary(low,mid-1)
         }else{
               ans.push(mid)
                Binary(mid+1,high)
         }
       
         
       
     }
    function SumHelper(arr,x){
        let sum=0
        
        for(let i=0;i<arr.length;i++){
            if((arr[i]-x)>0){
                sum+=arr[i]-x
            }
        }
        return sum
        
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