const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var reversePair = function (head) {
    
    let current = head
    
    while(current!=null&&current.next!=null){
        let k = current.data
        current.data =current.next.data
        current.next.data =k
        current =current.next.next
    }
    return head
    
};