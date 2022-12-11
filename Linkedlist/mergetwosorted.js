// Merging sorted arrays -11:49:15
// Description

// Given two arrays of size n and m (unsorted), sort them and then merge them. NOTE ; you can easily take all the input in one array and then sort them

// which is of (n+m)*log(n+m) complexity but try to do it in (n*logn + m*logm + n + m) complexity, i.e. merge them in linear time.


// Input
// 1<=T<=10

// 1<= N,M <= 100000

// 1 <= Ai <= 1000000000 (array1 of n elements)

// 1 <= Aj <= 1000000000 (array2 of m elements)


// Output

//Enter code here
function fun(n,m,arr1,arr2){
    arr1.sort((a,b)=>a-b)
       arr2.sort((a,b)=>a-b)
       
      let obj={}
      
      for(let i=0;i<n;i++){
          if((obj[arr1[i]])==undefined){
              obj[arr1[i]]=1
              
          }else{
              obj[arr1[i]]++
          }
      }
      
       for(let i=0;i<m;i++){
          if((obj[arr2[i]])==undefined){
              obj[arr2[i]]=1
              
          }else{
              obj[arr2[i]]++
          }
      }
      ans=[]
     for(let key in obj){
         let j=0
         while(j<(obj[key])){
             ans.push(+key)
             j++
         }
     }
     console.log(n+m)
     console.log(ans.join(" "))
    
}
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        [n,m]=input[line].trim().split(" ").map(Number)
        line++
        arr1=input[line].trim().split(" ").map(Number)
        line++
         arr2=input[line].trim().split(" ").map(Number)
         line++
         fun(n,m,arr1,arr2)
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

 //*************************************************correct solutioin */

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    
    dummy=new ListNode(-1)
    tail=dummy
    while(l1&&l2){
        
        if(l1.val<=l2.val){
            tail.next=l1
            l1=l1.next
        }else{
            tail.next=l2
            l2=l2.next
        }
        
        tail=tail.next
        tail.next=null
    }
    
    if(l1!==null){
        tail.next=l1
    }else if(l2!==null){
        tail.next=l2
    }
    
    return dummy.next
};

//**************************************************Using Recursion */

if (l1 == null)
            return l2;
        if (l2 == null)
            return l1;
 
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }