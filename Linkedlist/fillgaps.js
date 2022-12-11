// Fill Gaps -121:36:44
// Description

// You are given a sorted linked list containing unique values. You have to manipulate the linked list such that the difference between every two adjacent node values should be exactly equal to 1. You can only insert some extra between existing nodes in the linked list.

// Note

// You don’t need to take input/output. Just implement the given function.


// Input
// The first line of input contains the N denoting the number of elements of the linked list.

// The second line contains the elements of the linked list.

// Function description

// fillGaps(head) {

// // Write your code here

// }
// Arguments:

// head = head node of the LinkedList.
// Constraints

// 1 <= N <= 10^4

// 1<= node.val <=10^6


// Output
// Return the head of the modified linked list.

// Note

// The sample output will contain the modified Linked List.


// Sample Input 1 

// 3
// 4 7 8
// Sample Output 1

// 4 5 6 7 8
// Sample Input 2 

// 5
// 2 5 8 9 11
// Sample Output 2

// 2 3 4 5 6 7 8 9 10 11


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    cur=head
    
    while(cur.next){
        cur=cur.next
    }
    first=head.data
    last=cur.data
    head=new LinkedListNode(first)
    cur=head
    while(first+1<=last){
        node=new LinkedListNode(first+1)
       cur.next=node
       cur=cur.next
       first++
    }
    
    
    return head
};
