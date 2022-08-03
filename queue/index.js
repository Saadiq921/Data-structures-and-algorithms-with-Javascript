class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//First In First Out
class Queue {
    constructor(){
        // create front and back nodes
        //create a length property
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    //Joining the queue from back
    enqueue(data){
        // create a new node
        const newNode = new Node(data);
        // empty queue ? front and back = new node;
        if(this.length === 0){
            this.front = newNode;
            this.back = newNode;
        // an item in the queue ? new node becomes back node and points to front node    
        }else if(this.length === 1) {
            this.back = newNode;
            newNode.next = this.front;
        // else point new node to back node    
        }else {
            const currentBack = this.back;
            newNode.next = currentBack;
            //make back node the new node
            this.back = newNode;
        }
        // increase the length
        this.length++;
        
    }
    //Removes front node
    dequeue(){
        //get second to last node
        let currentFront = this._traverse();
        currentFront = currentFront.next;
        //get node before front node
        const newFront = this._traverse();
        //node before front node becomes front node
        this.front = newFront;
        //new front node's next points to null
        newFront.next = null;
        //decrease length property 
        this.length--;
        //return removed node
        return currentFront;
    }
    //helper function to get second to last node
    _traverse(){
        let currentNode = this.back;
        while(currentNode.next !== this.front){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}
