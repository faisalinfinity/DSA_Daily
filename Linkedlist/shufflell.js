const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var shuffle = function (head) {
     if (!head || !head.next) {
        return head;
    }
    
    
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
 
    let prev = null;
    let curr = slow.next;
    slow.next = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
   
    let p1 = head;
    let p2 = prev;
    while (p1 && p2) {
        let next1 = p1.next;
        let next2 = p2.next;
        p1.next = p2;
        p2.next = next1;
        p1 = next1;
        p2 = next2;
    }
    
    return head;
};


