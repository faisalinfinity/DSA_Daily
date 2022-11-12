// K Weakest Rows in a Matrix Ended
// Description

// You are given anm x nbinary matrixmatof1's (representing soldiers) and0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the1's will appear to the left of all the0's in each row.

// A rowiis weaker than a rowjif one of the following is true:

// The number of soldiers in rowiis less than the number of soldiers in rowj.
// Both rows have the same number of soldiers andi < j.
// Return the indices of thekweakest rows in the matrix ordered from weakest to strongest.


// Input
// Input Format:-

// The first line of input contains 3 integersm,n,k.

// Then next m lines contains n space-separated binary numbers representingmat

// Constraints:-

// 2 <= n, m <= 100

// 1 <= k <= m

// mat[i][j]is either 0 or 1.


// Output
// Output Format:-

// Printkspace-separated integers -kweakest rows.


// Sample Input 1 

// 5 5 3
// 1 1 0 0 0
// 1 1 1 1 0
// 1 0 0 0 0
// 1 1 0 0 0
// 1 1 1 1 1
// Sample Output 1

// 2 0 3
// Sample Input 2 

// 4 4 2
// 1 0 0 0
// 1 1 1 1
// 1 0 0 0
// 1 0 0 0
// Sample Output 2

// 0 2
//Enter code here
function f(mat,k){
    let arr2=[]
    let index=[]
    for(let i=0;i<m;i++){

        let count=0
        for(let j=0;j<n;j++){
            if(mat[i][j]=='1'){
              
                count++
                
            }
            
        }
        arr2.push(count)
      index.push(i)
    }
    
    
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr2.length-i-1;j++){
            if(arr2[j]>arr2[j+1]){
                
                let temp=arr2[j]
                arr2[j]=arr2[j+1]
                arr2[j+1]=temp
                
                
                  let temp2=index[j]
                index[j]=index[j+1]
                index[j+1]=temp2
                
            }
        }
    }
    let ans=''
    for(let i=0;i<k;i++){
        ans+=index[i]+" "
        
    }
    console.log(ans)
   
}
function runProgram(input)
{
    input=input.trim().split('\n')
    x=input[0].trim().split(" ").map(Number)
    m=x[0]
    n=x[1]
    k=x[2]
    
    line=1
    let mat=[]
    for(let i=0;i<m;i++){
        arr=input[line].trim().split(' ').map(Number)
        line++
        mat.push(arr)
    }
    f(mat,k)
    
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