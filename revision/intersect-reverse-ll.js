const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var intersectAndReverse = function (head1, head2) {
    
    let temp1 = null
    let next1 = null
    
    let current1 = head1;
    while(current1!=null){
        next1= current1.next
        current1.next = temp1
        temp1 = current1
        current1 = next1
    }
    
      
    let temp2 = null
    let next2 = null
    let current2 = head2
    
    while(current2!=null){
        next2 = current2.next
        current2.next = temp2
        temp2 = current2
        current2 = next2
        
    }
    let result =""
    while(temp1!=null&&temp1!=null){
        if(temp1.data == temp2.data){
        result+=temp1.data+" "
        }
        
        if(temp1.data!==temp2.data){
            break
        }
        temp1 = temp1.next
        temp2= temp2.next
    }
    
    console.log(result.trim())
    
    
};
