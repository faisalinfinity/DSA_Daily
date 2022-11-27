/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
    	//step1 empty Q1 to Q2
    	
    	while(!this.Q1.isEmpty()){
    	    this.Q2.push(this.Q1.front())
    	    this.Q1.pop()
    	}
    	
    	//Step-2 pushing value to Q1
    	this.Q1.push(value)
    	
    //	step3 again emptying Q2 into Q1
    
    while(!this.Q2.isEmpty()){
    	    this.Q1.push(this.Q2.front())
    	    this.Q2.pop()
    	}
    
    
    }
    pop() {
    	//write your code here..
    	this.Q1.pop()
    }
    top() {
        //write your code here..
        return this.Q1.front()
    }
    isEmpty() {
    	//write your code here..
    	return this.Q1.isEmpty()
    }
}
