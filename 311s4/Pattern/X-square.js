
// Pattern Printing - X Square Ended
// Description

// You are given an integerN.

// Print the pattern as shown below.

// If the value stored inN = 7, then the pattern required will be

// * * * * * * * 
// * *       * * 
// *   *   *   * 
// *     *     * 
// *   *   *   * 
// * *       * * 
// * * * * * * * 


// Input
// The first and only line contains the value of N


// Output
// Print the pattern as shown in the problem statement


// Sample Input 1 

// 7
// Sample Output 1

// * * * * * * *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// * * * * * * *
// Sample Input 2 

// 3
// Sample Output 2

// * * *
// * * *
// * * *
// Hint

// Print the pattern as shown in the sample output.

// Hint: The dimension of the Square isN x N

function patternPrinting(n) {
    // Write code here
    
    for(let i=0;i<n;i++){
        bag=""
        for(let j=0;j<n;j++){
            if(i==0 || i==n-1){
                bag+="* " // * + space
            }else if(j==0 || j==n-1){
                bag+="* "  // *+ space
            }else if (i==j || j+i==n-1){
                bag+="* "  // *+ space
            }else{
                bag+="  "   // 2 space
            }
        }
        console.log(bag.trim())
    }
}
