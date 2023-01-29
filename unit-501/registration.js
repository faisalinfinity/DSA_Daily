// Registration Ended
// Description

// A new e-mail service "Masaidesk" is going to be opened in Masai School in the near future. The site administration wants to launch their project as soon as possible, that's why they ask you to help. You're suggested to implement the prototype of site registration system. The system should work on the following principle.

// Each time a new user wants to register, he sends to the system a request with his name. If such a name does not exist in the system database, it is inserted into the database, and the user gets the response OK, confirming the successful registration. If the name already exists in the system database, the system makes up a new user name, sends it to the user as a prompt and also inserts the prompt into the database. The new name is formed by the following rule. Numbers, starting with 1, are appended one after another to name (name1, name2, ...), among these numbers the least i is found so that namei does not yet exist in the database.


// Input
// Input Format

// The first line contains the number of users, N

// The next N lines contain the name of the users

// Constraints

// 1<=N<=10^5

// 1<=|name|<=10


// Output
// Print the response given by the system for each input.


// Sample Input 1 

// 6
// first
// first
// second
// second
// third
// third
// Sample Output 1

// OK
// first1
// OK
// second1
// OK
// third1

//Enter code here
function runProgram(input)
{
    input=input.trim().split("\n")
    tc=+input[0]
    line=1
    let obj={}
    for(let i=0;i<tc;i++){
        name=input[line].trim()
        line++
        if(obj[name]==undefined){
            obj[name]=1
            console.log("OK")
        }else{
            obj[name]++
            console.log(name+(obj[name]-1))
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