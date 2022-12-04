const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
     curr=head
     min=head
     prev=null
     
     while(curr){
         if(curr.next && curr.next.data<=min.data){
             min=curr.next
             prev=curr
         }
         curr=curr.next
     }
     
     if(min!==head){
         prev.next=min.next
     }else{
         head=head.next
     }
     
     return head
};
