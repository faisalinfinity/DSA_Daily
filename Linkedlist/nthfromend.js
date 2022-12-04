const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const rev=(head)=>{
    cur=head
    next=null
    prev=null
    
    while(cur){
        next=cur.next
        cur.next=prev
        prev=cur
        cur=next
    }
    return prev
    
}
function nth_node(head,n){
    if(n==0){
        return head
    }
    head=rev(head)
    cur=head
    let i=1
    while(i<n){
        cur=cur.next
        i++
    }
    
    return cur.data
    
    
}
