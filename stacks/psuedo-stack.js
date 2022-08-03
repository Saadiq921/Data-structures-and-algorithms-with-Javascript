class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


//Last In First Out
class Stack {
    constructor(){
        //create top and bottom nodes
        //create length property
    }
    //adds node to stack
    push(data){
        // create a new node
        // empty queue ? top and bottom = new node;
        // an item in the queue ? new node becomes top node and points to bottom node 
        // else point new node to top node  
        //make top node the new node
    }
    //reveals the top node
    peek(){
        //return top node
    }
    //checks if stack has a node
    isEmpty(){
        //check length of stack
    }
    //removes top node
    pop(){
        //retrieve current top
        //create a pointer to top nodes next
        //point top node to newNode
        //if top doesn't exist, bottom should also be null
        //return the removed node
    }
    
}

