// Unique Gift -4:17:45
// Description

// You are visiting a friend at her housewarming party. When you arrive at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, and since there aren't many gift shops nearby, most of them end up buying the same gift for her. As more and more people keep joining the queue, you are curious to find the first unique gift in the line. You sit and examine the row after a new person arrives; when he does, you examine the queue from front to back to find out which is the first different gift and add it to your list.

// Note-If after a new person arrives no gift is unique in the queue add '#' to the output


// Input
// The first line contains the number of test cases (t)

// The next t lines contains a string of alphabets arranged randomly, each alphabet represents a unique gift.


// 1 <= length of the string <= 20

// 1<=t<=10000


// Output
// You have to output t stringsafter processing the stream of lowercase alphabets from the input strings


// Sample Input 1 

// 2
// abadbc
// abcabc
// Sample Output 1

// aabbdd
// aaabc#
// Hint

// For the first test case-

//Enter code here

function test(str){
    
    // for(let i=0;i<str.length;i++){
    //     if(stack.length==0 ){
    //         stack.push(str[i])
    //         ans.push(str[i])
    //     }else if(stack.includes(str[i])){
    //          stack.shift()
    //           ans.push(stack[0])
              
    //     }else{
    //         stack.push(str[i])
    //         ans.push(stack[0])
           
    //     }
         
    //      if(ans[ans.length-1]==undefined){
    //          ans[ans.length-1]='#'
    //      }
         
         
    // }
    
    let Q=[]
    let ans=[]
    let obj={}
    for(let i=0;i<str.length;i++){
        
        if(obj[str[i]]==undefined){
            obj[str[i]]=1
        }else{
            obj[str[i]]++
        }
        
        Q.push(str[i])
        
        while(Q.length!==0){
            if(obj[Q[0]]>1){
                Q.shift()
            }
            else{
                ans.push(Q[0])
                break;
            }
        }
        
        if(Q.length==0){
            ans.push("#")
        }
        
    }
    
    
    console.log(ans.join(''))
}


function runProgram(input)
{
    input=input.trim().split('\n')
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        str=input[line].trim()
        line++
        test(str)
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