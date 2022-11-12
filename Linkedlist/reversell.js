
let LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    
    if(!head){
      let  node=new LinkedListNode(head)
        return head
    }
    let temp=[]
  let  current=head
    while(current.next){
        temp.push(current.data)
        current=current.next
    }
    temp.push(current.data)
    
    let current2=head
    let i=temp.length-1
    while(current2.next){
        current2.data=temp[i]
        current2=current2.next
        i--
    }
    current2.data=temp[0]
    
    return head
    
    
    
    
}



//correct method

let LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    
    if(!head){
      let  node=new LinkedListNode(head)
        return head
    }
    
    let present=head
    let past=null
    let future=null
    while(present){
        future=present.next
        present.next=past
        past=present
        present= future
        
    }
    
    return past
    
    
}

