// Problem 1
// Given a square matrix print both the diagonalsProblem 1

matrix=[[1,2,3,4],
       [5,6,7,8],
       [9,10,11,12],
       [13,14,15,16]]

let N=matrix.length
let M=matrix[0].length
// let bag=''
// let bag2=""
// for(let i=0;i<N;i++){
//   for(let j=0;j<M;j++){

//   if(i==j) {
//     bag+=matrix[i][j]+" "
    
//   }
//   else if(i+j==N-1){
//     bag2+=matrix[i][j]+" "
//   }
//   }
// }
// console.log("left diagonal is"+" "+bag,"right diagonal is"+" "+bag2)




let ans=''
for(let i=0;i<N;i++){
         let k=0
        ans=''
  for(let j=i;j>=0;j--){
    ans+=matrix[k][j]+" "
     
    k++
  }
   console.log(ans)
 
  
}

let ans2=''

for(let i=1;i<M;i++){
         let k=M-1
  ans2=''
  for(let j=i;j<M;j++){
    ans2+=matrix[j][k]+" "
    k--
  }
  console.log(ans2)
}