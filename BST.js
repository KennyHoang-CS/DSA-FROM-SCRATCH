class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right; 
    }
};

class BST {
    constructor(root = null) {
        this.root = root; 
    }

    add(data) {

        // create a new node.
        let newNode = new Node(data);

        // is tree empty?
        if (!this.root) {
            this.root = newNode; 
        } else { // find the insertion point in the tree. 
            this.addNode(this.root, newNode); 
        }
    }
        
    addNode(node, newNode) {

        // node value is less than newNode value, go right. 
        if (node.data < newNode.data) {
            // found empty spot to insert. 
            if (!node.right) {
                node.right = newNode; 
            } else { // keep traversing until we find a spot. 
                this.addNode(node.right, newNode); 
            }
        } else if (node.data > newNode.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.addNode(node.left, newNode);
            }
        }

    }

    delete(target) {
        
        // check if tree empty. 
        if (!this.root) {
            console.log('TREE EMPTY. Nothing to delete.');
            return; 
        } else { // locate the node for deletion.
            this.deleteNode(this.root, target);
        }
    }

    deleteNode(target) {

    }

    // traversals 

    traverseInOrder(node) {
        if (node) {
            this.traverseInOrder(node.left);
            console.log(node.data);
            this.traverseInOrder(node.right); 
        }
    }

    traversePreOrder(node) {
        if (node) {
            console.log(node.data);
            this.traversePreOrder(node.left);
            this.traversePreOrder(node.right);
        }
    }

    traversePostOrder(node) {
        if (node) {
            this.traversePostOrder(node.left);
            this.traversePostOrder(node.right);
            console.log(node.data);
        }
    }

    // helpers
    getRoot() {
        return this.root; 
    }

    search(target) {

        function searchNode(node) {
            if (node) {
                // did we find the node?
                if (node.data === target) {
                    console.log("TARGET FOUND");
                    return node; 
                }
                else if (node.data > target) {
                    // node value greater than target, go left.
                    return searchNode(node.left); 
                } else {
                    // node value less than target, go right.
                    return searchNode(node.right);
                }
            } else return null; 
        }
        return searchNode(this.root); 
    }

    findMin() {
        let current = this.root; 
        while (current.left !== null) {
            current = current.left;
        }
        
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }

        return current.data; 
    }
};

let bt = new BST();

bt.add(5);
bt.add(3);
bt.add(1);
bt.add(8);
bt.add(6);
console.log(bt.findMin());
