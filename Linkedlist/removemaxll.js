const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMaximum = function (head) {
    cur=head
    prev=null
    max=head
    
    while(cur){
        if(cur.next && max.data<=cur.next.data){
            max=cur.next
            prev=cur
        }
        cur=cur.next
    }
    
    if(max!==head){
        prev.next=max.next
    }else{
        head=head.next
    }
    return head
};
