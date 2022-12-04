
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    
    current=head
    
   while(current){
       current=current.next
       if(current==head){
           return true
       }
                       
       
   }
   return false
    
};



/////////////Second Solution


current=head
next=head

while(current  && next && next.next){
   current=current.next
   next=next.next.next
   
   if(current==next){
       return true
   }
                   
   
}
return false

