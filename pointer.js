// Team of Heroes -85:11:25
// Description

// India and New Zealand are going to be playing in the final of the World Test Championship, and Virat Kohli, the captain of the Indian Cricket Team, desperately wants to win the game

// Now Virat Kohli is very superstitious. He has a superstitious that if the sum of the jerseys of the captain and the vice - captain of the team is exactly equal toK, the team wins one hundred percent.

// Now, he has N jersey numbers given in the form of an array, and he has to find out if there are two jersey numbers, whose sum is equal toKor not. The jersey numbers have been kept in strictly increasing order. Help him, accomplish this task


// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case, containsN, the number of Jerseys, andKis the required sum

// The next line containsN

//Enter code here
function fun(n,k,arr){
    
    l=0,r=n-1
    
    while(l<r){
        if(arr[l]+arr[r]>k && l<r){
            r--
        }
        else if(arr[l]+arr[r]<k && l<r){
            l++
        }
        else {
            return true
        }
        
    }
    return false
    
}


function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    for(let i=0;i<tc;i++){
        l1=input[line].trim().split(" ").map(Number)
        n=+l1[0]
        k=+l1[1]
        line++
        arr=input[line].trim().split(" ").map(Number)
        line++
        if(fun(n,k,arr)){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
        
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