class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    add(data){
        const newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
        }else {
            const currentNode = this.root;
                if(data < this.root.data){
                    currentNode.left = newNode;
                }else if(data > this.root.data){
                    currentNode.right = newNode;
                }
        }
    }
}

const tree = new Tree();
tree.add(25)
tree.add(20)
tree.add(29)
console.log(tree)