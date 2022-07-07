class Node {
    constructor(){
        this.data = null,
        this.next = null
    }
}

class LinkedList {
    //List should be initialized with a value
    constructor(){
        //creates a head and tail property
        //initializeength property which 

    }
    //Adds to the end of the list
    append(data){
        //creates a new node
        //is the list empty?
        //if yes, the head and tail will be the same node
        //if no, the tail points towards the new node
        //increase the length of the list
    }
    //Adds to the begining of the list
    prepend(data){
        //create a new node
        //newnode's next property points to current head
        //newnode becomes the current head
        //length is increased
    }
    getAt(index){
        //starts pointer with the first node in list, the head node
        //starts a position counter initialized to 0
        //uses a loop to ensure we pass through every node
        //loop also checks if our current node is available
        //increases the position counter for each passed node
        //when the position counter matches the index, return the currentnode
        //
    }

}
