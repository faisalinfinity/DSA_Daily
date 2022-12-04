
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};



// Complete the function below

var addTwoNumbers = function (l1, l2) {
    
    cur1=l1
    cur2=l2
    dummy=new ListNode(0)
    temp=dummy
    let carry=0
    while(cur1 || cur2 || carry==1){
        sum=0
        if(cur1){
            sum=sum+cur1.val
            cur1=cur1.next
        }
         if(cur2){
            sum=sum+cur2.val
            cur2=cur2.next
        }
        
        val=sum+carry
        carry=Math.floor(val/10)
        val=val%10
        
        random=new ListNode(val)
        temp.next=random
        temp=temp.next
        
    }
    
    
    
    
   
    
  return dummy.next
    
    
};

