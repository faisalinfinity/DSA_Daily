// Merge two Linked Lists -10:23:43
// Description

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Complete the function below and return the head of the new linked list.


// Input
// This is a function complete problem

// To get a understanding of the input-

// The first line contains the number of nodes in the first linked list (n1)

// Next n1 lines contains the nodes of the first linked list

// Next line contains the number of nodes in the second linked list (n2)

// Next n2 lines contains the nodes of the second linked list

// n1, n2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


const ListNode = class {
    constructor(nodeData) { 
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    
    c1=l1
    c2=l2
    let arr=[]
    while(c1){
       arr.push(c1.val)
     
       c1=c1.next
    }
     while(c2){
       arr.push(c2.val)
     
       c2=c2.next
    }
    arr.sort((a,b)=>a-b)
       head=new ListNode(arr[0])
       cur=head
    i=1
    while(i<arr.length){
        node=new ListNode(arr[i])
        cur.next=node
        
        cur=cur.next
            i++
    }
    return head
    
};

