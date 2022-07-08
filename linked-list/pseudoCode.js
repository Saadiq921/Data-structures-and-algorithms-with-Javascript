//Holds properties of a node
class Node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

//Holds properties of a LinkedList
class LinkedList {
    constructor(){
        //creates a head and tail property
        //initialize length property 
    }
    //Adds node to end of list
    append(data){
        //creates a new node
        //is list empty?
        //yes?, then head and tail will be same 
        //no?, head's next is new node, tail points towards the new node
        //else, tail next points to new node
        ////new node becomes tail
        //length property is increased
    }
    //Adds to the begining of the list
    prepend(data){
        //create a new node
        //newnode's next property points to current head
        //newnode becomes current head
        //length property is increased
    }
    ////returns node at user input
    traverse(index){
        //starts pointer with the first node in list
        //starts a position counter initialized to 0, to represent first node
        //uses loop to ensure continuous increment
        //check if index is matched by counter
        //increase node position
        //increases the position counter for each passed node
        //when the position counter matches the index, return the currentnode
    }
    _removeHead(){
        //get the second node in the list, the head nodes next
        //make the second node the new head node
        //reduce length of list
    }
    _removeTail(){
        //get the node before the tail node
        //point the nodes next to null
        //node becomes the tail node;
        //reduce length of list
    }
    removeNode(index){
        //index is 0?, invoke _removeHead helper 
        //index is greater than list length?
        //index is list length?, invoke _ removeTail helper 
        //find node before node to delete
        //find node to delete
        //point node before's next to node to delete's next
        //reduce length of list
    }
    insert(index, data){
        //index is 0?, invoke prepend method
        //index is greater than list length
        //index is list's length?, invoke append method
        //create a new node using Node class
        //create two pointers
        //pointerA points to node at position Before desired position
        //pointerB points to pointerA's next node
        //ponterA's next points to new node
        //new node's next points to pointerB
        //increase list's length
    }
}
