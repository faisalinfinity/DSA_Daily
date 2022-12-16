// Smart Teacher Ended
// Description

// You are a teacher and you have asked your students to not scribble over wrong letters, simply write # to so the teacher will consider the previous undeleted character as deleted.

// Say for example , tad#bc### results in t as the first # deleted d leaving tabc### and the three #'s then delete abc respectively in order c, b, a.

// You have a students solution and the correct answer for n questions.

// '#' deletes the previous undeleted character if it exists.

// Output for each question CORRECT or WRONG if both the answer and solution after deleting respective elements come out to be same or different.


// Input
// Input Format
// The first line contains the number of questions t.

// Next 3*t lines we have the description of the t questions.

// For each question there is 3 lines of input.

// The first line of input contains n, the size of answer and solution.

// The second line contains a string of size n, the students answer to the question.

// The third line contains a string of size m, the solution to the question.

// Both the solution and answer contain alphabets and '#' characters.

// Constraints
// 1 <= t <=1000

// 1 <= n,m <= 10^4


// Output
// Output Format
// For each testcase output n lines the ith of which [ 1 <= i <= n ] is CORRECT if the ith answer and ith solution are same or WRONG if they are different.


// Sample Input 1 

// 3
// 4
// ab#c
// ad#c
// 4
// ab##
// c#d#
// 3
// aab
// aa#
// Sample Output 1

// CORRECT
// CORRECT
// WRONG
// Hint

// In the first test case both answer and solution become "ac" so CORRECT.

// In the second test case both answer and solution become empty string, so CORRECT.

// In the third test case answer becomes aab and solution is a so WRONG.

//Enter code here

function fun(n,str1,str2){
    
    let stack1=[]
    let stack2=[]
    
    for(let i=0;i<n;i++){
        if(str1[i]=='#'){
            stack1.pop()
            
        }
        else{
            stack1.push(str1[i])
        }
    }
    
     for(let i=0;i<n;i++){
        if(str2[i]=='#'){
            stack2.pop()
            
        }
        else{
            stack2.push(str2[i])
        }
    }
    
    for(let i=0;i<n;i++){
        if(stack1[i]!==stack2[i]){
            console.log('WRONG')
            return
        }
    }
    
    console.log('CORRECT')
    
}
function runProgram(input)
{
    input=input.trim().split('\n')
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        n=+input[line]
        line++
        str1=input[line].trim()
        line++
        str2=input[line].trim()
        fun(n,str1,str2)
        line++
        
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