const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function reverse(head){
    let past=null
    let present=head;
    let future=null
    
    while(present){
        future=present.next
        present.next=past;
        past=present;
        present=future
    }
    
    return past
}

function nth_node(head,n){
    
    head=reverse(head)
    current=head;
    
    let i=1
    while(i!==n && current.next){
        current=current.next
        i++
    }
    
    return current.data
    
}
