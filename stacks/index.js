
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
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    //adds node to stack
    push(data){
        // create a new node
        const newNode = new Node(data);
        // empty queue ? top and bottom = new node;
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        // an item in the queue ? new node becomes top node and points to bottom node 
        }else if(this.length === 1){
            this.top = newNode;
            this.top.next = this.bottom;
        // else point new node to top node  
        }else {
            newNode.next = this.top;
            //make top node the new node
            this.top = newNode;
        }
        this.length++;
    }
    //reveals the top node
    peek(){
        return this.top;
    }
    //checks if stack has a node
    isEmpty(){
        return (this.length === 0);
    }
    //removes top node
    pop(){
        //retrieve current top
        const currentTop = this.top;
        //create a pointer to top nodes next
        const newTop = currentTop.next;
        //point top node to newNode
        this.top = newTop;
        //if top doesn't exist, bottom should also be null
        if(!this.top){
            this.bottom = null;
        }
        this.length--;
        return currentTop;
    }
    
}

