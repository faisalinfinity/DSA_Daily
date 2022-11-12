const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


// Complete the function below
var isPalindrome = function (head) {
    if(!head){
        let node=new LinkedListNode(head)
        head=node
        return head
    }
    
    let past=null
    let present=head
    let future=null
    
    while(present!=null){
        future=present.next
        present.next=past
        past=present
        present=future
    }

    
    let current=head
    let current2=past
    
    while(current && current2){
        if(current.data!==current2.data){
            return false
            
        }
        current=current.next
        current2=current2.next
        
    }
    return true
    
    
   
   
    
   
    
    
    
};
