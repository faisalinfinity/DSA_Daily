const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function (head) {
    let present=head
    let future=null
    let future2=null
  
    
    while(present.next.next){
      future=present.next
      future2=present.next.next
      
      if((present.data<future.data && future.data<future2.data)||(present.data>future.data && future.data>future2.data)){
          return false
      }
      
      present=present.next
      
        
    }
    return true
    
};


