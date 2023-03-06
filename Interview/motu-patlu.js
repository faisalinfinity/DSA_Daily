// Description
//    Motu decided to visit his friend Potlu. It turned out that the Motu's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the
//    Motu can move 1, 2, 3, 4 or 5 positions forward.
//    Determine, what is the minimum number of steps he need to make in order to get to his friend's house.
//  Input
//    Input Format:
//    First and the only line contain the integer n which denotes the position of his friend's house.
//    Constraints:
//    1 <=n <= 10^6


function runProgram(input) {
    // Write code here
    input=input.trim().split('\n')
    n=+input[0]
     let i=0
     let count=0
     while(i<n){
         i=i+5
         count++
     }
    console.log(count)
  }
  
  if (process.env.USER === "") {
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
  