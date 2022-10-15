 // Reduce String -3:29:37
// Description

// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

// I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose


// Input
// Input Format

// First and the only line contains string

// Constraints

// Length of string < 1000






// Output
// Output Format

// If the final string is empty, print Empty String; otherwise, print the final non-reducible string.


// Sample Input 1 

// aaabccddd
// Sample Output 1

// abd

//Enter code 
function fun(str){

    arr=[]

    
    for(let i=0;i<str.length;i++){
        
          if(arr[arr.length-1]==str[i]){
            arr.pop()
            
        }
        else
         if(arr[arr.length-1]==undefined){
            arr.push(str[i])
        
            
         }   
        else{
            arr.push(str[i])
        }
        
        
       
            
            
        
        
      
    }
    
    temp=""
    for(let i=0;i<arr.length;i++){
      temp+=arr[i]
    }
    
    if(temp==""){
        console.log("Empty String")
    }
    else{
        console.log(temp)
    }
    
    
    
    
}

function runProgram(input)
{
    input=input.trim()
    fun(input)
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