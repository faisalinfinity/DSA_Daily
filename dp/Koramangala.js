// You are in Koramangala and want to go to BTM 2nd Stage, but roads are blocked. Instead there are n trampolines kept on the route. These trampoline are different in a way that yo
//  u don't just jump on it, but it takes you forward as well. There is a number written on all the trampolines that indicates the maximum number of trampoline you can jump from there.
//  NOTE: The last trampoline is in BTM 2nd stage (where you want to reach)
//  For instance, assume there are 6 trampolines with numbers 1,3,6,1,0,9 written on it. So, from first trampoline you
// in js


function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    n=+input[0]
    
    arr=input[1].trim().split(" ").map(Number)
   
  const minJumps = new Array(n).fill(Infinity);
  minJumps[0] = 0;
  
  
  for (let i = 1; i < n; i++) {
  
    for (let j = 0; j < i; j++) {
   
      if (j + arr[j] >= i) {
        minJumps[i] = Math.min(minJumps[i], minJumps[j] + 1);
      }
    }
    
    
  }
  console.log(minJumps[n-1])
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
  