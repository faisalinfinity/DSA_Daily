
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};




var rotateRight = function(head, k) {
    let i=0
    cur=head
    prev=null
    while(i<k){
         
         while(cur.next){
             prev=cur
             cur=cur.next
         }
         prev.next=null
         cur.next=head
         head=cur
          
         i++
    }
   
    return head
};

