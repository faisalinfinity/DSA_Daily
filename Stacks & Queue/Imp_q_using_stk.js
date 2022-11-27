// Implement Queue using Stack -3:39:46
// Description

// Complete the function of push and pop and front for a queue, stack object names are S1 and S2.

// Expected Time complexity is O(N) for push and O(1) for pop and front.


// Input
// This is a function complete problem. You just have to complete the function. The input format given below is just for your understanding.

// The first line of the input contains Q, the number of queries to be executed.

// Each query X is of type X = 0, X = 1 or X = 2.

// Query X = 0 indicates, an element Y to be pushed into the queue.

// Query X = 2 indicates, an element to be removed from the queue.

// Query X = 1 indicates, an element to be peeked from the queue.


// Output


/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor()
    {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
    	//write your code here..
    	//Empty s1 to s2
    		while(!this.S1.isEmpty()){
     	    this.S2.push(this.S1.top())
     	    this.S1.pop()
     	}
     	
     	// step 2 : push value to S1
     		this.S1.push(value)
     	
     	//step 3 again empty stack2 to stk1
     		while(!this.S2.isEmpty()){
     	    this.S1.push(this.S2.top())
     	    this.S2.pop()
     	}
     	
     
    }
    pop() {
     	//write your code here..
     this.S1.pop()
     	
     
    }
    front() {
    	//write your code here..
    	return this.S1.top()
    }
    isEmpty() {
    	//write your code here..
    	return this.S1.isEmpty()
    	
    }
}
