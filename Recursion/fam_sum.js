// # The Famous Sum Ended
// # Description

// # You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

// # we need to find thesuper digit ofthe integer p

// # We definesuperdigit of an integer pusing the following rules:

// # If p has only 1 digit, then itssuperdigit is 1.
// # Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.
// # Read the Sample input explanation for better understanding.


// # Input
// # Input Format

// # The first line contains two space-separated integers,n-a string representation of an integerand k-an integer, the times to concatenate nto make p.

// # Constraints

// # 1 <= n <= 10^100000

// # 1 <= k <=10^5


// # Output
// # Print thesuperdigit sum p


// # Sample Input 1 

// # 148 3
// # Sample Output 1

// # 3
// # Sample Input 2 

// # 123 3
// # Sample Output 2

// # 9
// # Hint

// # Sample Input 1 Explanation

// # Here n = 148 and k = 3 ,so p = 148148148.

// # super_digit(P) = super_digit(148148148) 
// #                = super_digit(1+4+8+1+4+8+1+4+8)
// #                = super_digit(39)
// #                = super_digit(3+9)
// #                = super_digit(12)
// #                = super_digit(1+2)
// #                = super_digit(3)
// #                = 3.
// # Sample Input 2 Explanation

// # Here n = 123 and k = 3 ,so p = 123123123

// # super_digit(P) = super_digit(123123123) 
// #                = super_digit(1+2+3+1+2+3+1+2+3)
// #                = super_digit(18)
// #                = super_digit(1+8)
// #                = super_digit(9)
// #                = 9

function runProgram(input)
{
    input=input.trim().split(" ")
    n=input[0]
    k=+input[1]
 
    
    let digit=Super_digit(n)*k
    digit=Super_digit(digit)
    console.log(digit)

    
    function Super_digit(n){
        if(n<10){
            return n
        }
        let sum=0
        n=n.toString()
        for(let i=0;i<n.length;i++){
            sum+=+n[i]
        }
        
        return Super_digit(sum)
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