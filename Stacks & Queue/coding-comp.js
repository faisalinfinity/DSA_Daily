// Masai Coding Competition -70:49:28
// Description

// There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

// There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

// E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

// D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue


// Input
// Input Format :

// First line contains an integer Q denoting the number of operations.

// Next Q lines will contains one of the 2 types of operations.



// Constraints :

// Number of dequeue operations will never be greater than enqueue operations at any point of time.

// 1<=Q<=100000

// 1<=a<=4

// 1<=b<=50000


// Output


 //Enter code here
 let club=[]
 let c1=[]
 let c2=[]
 let c3=[]
 let c4=[]
 

function test(q,c,r){
    if(q=="E"){
        if(club.includes(c)===false)club.push(c)
        
        
        switch(c){
            case 1:c1.push(r)
            break;
            
            case 2:c2.push(r) 
            break;
            
            case 3:c3.push(r)
            break;
            
            case 4:c4.push(r)
            
        }
        
    }else if(q=="D"){
        
        switch(club[0]){
             case 1:console.log(club[0]+" "+c1.shift())
             if(c1.length==0)club.shift()
            break;
            
            case 2:console.log(club[0]+" "+c2.shift())
             if(c2.length==0)club.shift()
            break;
            
            case 3:console.log(club[0]+" "+c3.shift())
             if(c3.length==0)club.shift()
            break;
            
            case 4:console.log(club[0]+" "+c4.shift())
             if(c4.length==0)club.shift()
            
        }
    }
    
}

function runProgram(input)
{
    input=input.trim().split('\n')
    n=+input[0]
    line=1
    let j=0
    for(let i=0;i<n;i++){
        let [q,c,r]=input[line].trim().split(' ').map(String)
        line++
        test(q,+c,+r)
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