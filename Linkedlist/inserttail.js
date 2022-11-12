
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    
    if(head==null){
        let node=new LinkedListNode(data)
        head=node
        return head
    }
    let node=new LinkedListNode(data)
    
    let current=head
    while(current.next){
        current=current.next
    }
    
    current.next=node
    return head
    
}

