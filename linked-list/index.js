//Holds properties of a node in a linked list
class Node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

//Holds properties of a linked list
class LinkedList {
    //List should be initialized with a value
    constructor(){
        //creates a head and tail property
        this.head = null;
        this.tail = null;
        //initialize length property which 
        this.length = 0;

    }
    //Adds to the end of the list
    append(data){
        //creates a new node
        const newNode = new Node(data);
        //is the list empty?
        if(this.length === 0){
        //the head and tail will be the same node
            this.head = this.tail = newNode;
        //list has a single node?
        }else if(this.length === 1){
            //tail points to new node
            this.head.next = newNode;
            //head's next node points to new node
            this.tail = newNode;
        }else {
            //tail next points to new node
            this.tail.next = newNode;
            //new node becomes tail
            this.tail = newNode;
        }
        //length property is increased
        this.length++;
    }
    //Adds to the begining of the list
    prepend(data){
        //create a new node
        const newNode = new Node(data);
        //new node's next property points to current head
        newNode.next = this.head;
        //newnode becomes the current head
        this.head = newNode;
        //length property is increased
        this.length++;
    }
    //returns node at user input
    traverse(index){
        //starts pointer with the first node in list, the head node
        let currentNode = this.head;
        //position counter initialized to 0(currentNode)
        let counter = 0;
        //uses loop to ensure continuous increment
        //check if index is matched by counter
        while(counter !== index){
        //increase node position
            currentNode = currentNode.next;
        //increases the position counter for each passed node
            counter++;
        }
        //when the position counter matches the index, return the currentnode
        return currentNode;
    }
    _removeHead(){
        //get the second node in the list, the head nodes next
        const newHead = this.head.next;
        //make the second node the new head node
        this.head = newHead;
        //reduce length of list
        this.length--;
    }
    _removeTail(){
        //get the node before the tail node
        const newTail = this.traverse(this.length - 2);
        //point the nodes next to null
        newTail.next = null;
        //node becomes the tail node;
        this.tail = newTail;
        //reduce length of list
        this.length--;
    }
    removeNode(index){
        //index is 0?, invoke _removeHead helper 
        if(index === 0){
            return this._removeHead();
            //index is greater than list length?
        }else if(index > this.length){
            return `Your input(${index}) is greater than list's length(${this.length})`;
            //index is list length?, invoke _ removeTail helper 
        }else if(index === this.length){
            return this._removeTail();
        }
        //find node before node to delete
        const nodeBefore = this.traverse(index - 1)
        //find node to delete
        const nodetoDelete = this.traverse(index);
        //point node before's next to node to delete's next
        nodeBefore.next = nodetoDelete.next;
        //reduce length of list
        this.length--;
    }
    insert(index, data){
        //index is 0?, invoke prepend method
        if(index === 0){
            return this.prepend();
            //index is greater than list length
        }else if(index > this.length){
            return `Your input(${index}) is greater than list's length(${this.length})`;
            //index is list's length?, invoke append method
        }else if(index === this.length){
            return this.append();
        }
        //create a new node using Node class
        const newNode = new Node(data);
        //create two pointers
        //pointerA points to node at position Before desired position
        const nodeBefore = this.traverse(index - 1);
        //pointerB points to pointerA's next node
        const nodeAfter = this.traverse(index);
        //ponterA's next points to new node
        nodeBefore.next = newNode;
        //new node's next points to pointerB
        newNode.next = nodeAfter;
        //increase list's length
        this.length++;
    }

}

const list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.insert(1, "lol")
console.log(list.head.next)








