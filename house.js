// Let's buy some houses Ended
// Description

// You just won a lottery and you want to spend some money. So, you want to buy some houses.

// There is just one condition:

// To buy two houses, you need to buy the road connecting those two houses. Now, you are given a list of roads, bought by you. You need to tell how many houses will you end up buying?


// Input
// Input Format

// First line contains an integer T, denoting the number of test cases. The first line of each test case contains an integer E, denoting the number of roads. The next E lines contain two space separated integers X and Y, denoting that there is a road between house X and house Y.

// Constraints

// 1 <= T <= 100

// 1 <= E <= 1000

// 1 <= X, Y <= 10000


// Output
// For each test case, you need to print the number of houses you will end up buying.
//Enter code here
function fun(e,mat){
    
    temp=[]
    
    for(let i=0;i<e;i++){
        temp.push(+mat[i][0])
        temp.push(+mat[i][1])
    }
    
    let obj={}
    for(let i=0;i<temp.length;i++){
        
            obj[temp[i]]=1
        
        
    }
    let count=0
    for(let key in obj){
        count++
    }
    console.log(count)
    
    
  
    
    // for(let i=0;i<temp.length;i++){
        
    //     if(arr[arr.length-1]==undefined ){
    //         arr.push(temp[i])
            
    //     }
    //     else if(arr[arr.length-1]==temp[i]){
    //         arr.pop()
            
    //     }
    //     else{
    //         arr.push(temp[i])
            
    //     }
        
        
        
    // }
    // console.log(arr)
    
    
    
    
}
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1

    for(let i=0;i<tc;i++){
        mat=[]
        e=+input[line]
        line++
        for(let j=0;j<e;j++){
            arr=input[line].trim().split(" ").map(Number)
            line++
            mat.push(arr)
        }
        fun(e,mat)
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