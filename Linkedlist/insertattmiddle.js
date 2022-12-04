// escription

// Given a non-empty, singly linked list with the head nodehead, return a middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Complete the functionbelow, no need to take any input.


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (t)

// Next t lines contains the node of the linked list

// t <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
     
     current=head
     let count=0
     while(current){
         current=current.next
         count++
     }
     
     if(count%2==0){
         middle=count/2
     }else{
         middle=Math.floor(count/2)
     }
     
     let i=0
     present=head
     
     while(i!==middle && present.next){
         present=present.next
         i++
     }
     
     return present.data
     
      
      
};

