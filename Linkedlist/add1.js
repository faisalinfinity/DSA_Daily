
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function reverse(head){
    let past=null
    let present=head
    let  future=null
    
    while(present){
        future=present.next
        present.next=past
        past=present
        present=future
    }
    
    return past
    
}

var addOneToLinkedList = function(head) {
    
    if(!head){
        let node=new LinkedListNode(head)
        head=node
        return head
    }
    
    let new_head=reverse(head)
    
    let current=new_head
     let carry=1
     
     let temp;
    while(current){
        temp=current.data+carry
         current.data=(temp)%10                                                                     
        carry=Math.floor(temp/10)
        temp2=current
          current=current.next
    }
    
     if(carry!==0){
            let new_node=new LinkedListNode(carry)
    
                 temp2.next=new_node
                
        }
    
 
     

    return reverse(new_head)
    
};

