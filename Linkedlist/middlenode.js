const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
     
     current=head
     let count=0
     while(current){
         current=current.next
         count++
     }
     
     if(count%2==0){
         middle=count/2
     }else{
         middle=Math.floor(count/2)
     }
     
     let i=0
     present=head
     
     while(i!==middle && present.next){
         present=present.next
         i++
     }
     
     return present.data
     
      
      
};

