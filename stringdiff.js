// String Difference Problem -3:30:38
// Description

// You are given two strings S1 and S2. You have to find the difference when S2 is subtracted from S1 (S1-S2)

// (Sx-Sy) results in character which are extra in Sx (in the same order it is present in Sx and not in Sy)


// Input
// Input Format:

// First line of the input contains S1

// Second line of input contains S2

// Constraints:

// Length of both strings <= 1000


// Output
// Output the difference between the 2 strings


// Sample Input 1 

// ABCX
// ABCD
// Sample Output 1

// X

function stringDifference(str1, str2) {
    //complete this function
    
    
    
    for(let i=0;i<str1.length;i++){
        
        if(str1[i]!==str2[i]){
            console.log(str1[i])
            
        }
    }
    
    
  }
  
  
