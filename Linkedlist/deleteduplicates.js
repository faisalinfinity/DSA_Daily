const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    if(!head){
        let node=new LinkedListNode(head)
        head=node;
        return head
    }

    let current=head
    while(current.next){
        prev=current
        if(prev.data==current.next.data){
            current.next=current.next.next
        
        }
        else{
             current=current.next
            
        }
    
    }

    return head
    
};

