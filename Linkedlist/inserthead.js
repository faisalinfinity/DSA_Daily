
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    if(!head){
        let node=new LinkedListNode(data)
        head=node
        return head
    }
    let node =new LinkedListNode(data)
    
    temp=head
    head=node
    head.next=temp
    
    return head
    
}

