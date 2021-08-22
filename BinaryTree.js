
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right; 
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root; 
    }

    // add
    add(data) {
        
        // check if tree is empty.
        if (!this.root) {
            this.root = new Node(data);
            return; 
        }
        
        let queue = [];
        queue.push(this.root);
        let node; 

        while (queue.length > 0) {
            
            node = queue.shift(); 

            if (!node.left) {
                node.left = new Node(data);
                return; 
            } else if (!node.right) {
                node.right = new Node(data); 
                return; 
            }

            if (node.left !== null) {
                queue.push(node.left);
            } 
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    } 
    
    // delete
    delete(target) {
        
        // if tree is empty.
        if (!this.root) {
            return; 
        }

        // check if the tree consists of one node and its the target.
        if (!this.root.left && !this.root.right) {
            if (this.root.data === target) {
                this.root = null;
            }
            return; 
        }

        let q = []; 
        q.push(this.root);
        let node = null, keyNode = null; 

        // do traversal order until we find the target and last node. 
        while (q.length > 0) {

            node = q.shift();  

            if (node.data === target) {
                keyNode = node;  
            }

            if (node.left !== null) {
                q.push(node.left);
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }

        if (keyNode !== null) {
            keyNode.data = node.data;
            this.deleteNode(node)
        }
    }

    deleteNode(delNode) {
        let q = [];
        q.push(this.root);

        while (q.length > 0) {
            let currentNode = q.shift(); 

            if (currentNode === delNode) {
                currentNode = null; 
                return; 
            }

            if (currentNode.left !== null) {
                if (currentNode.left === delNode) {
                    currentNode.left = null;
                    return; 
                } else {
                    q.push(currentNode.left);
                }
            }

            if (currentNode.right !== null) {
                if (currentNode.right === delNode) {
                    currentNode.right = null; 
                    return; 
                } else {
                    q.push(currentNode.right); 
                }
            }
        }
    }
    
    // traversals 

    bfs() {
        
        let queue = []; 
        let copyRoot = this.root;
        queue.push(copyRoot);
        let node; 

        while (queue.length > 0) {
            
            node = queue.shift(); 
            console.log(node.data);

            if (node.left != null) {
                queue.push(node.left);
            } 
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    } 
}

let bt = new BinaryTree();

bt.add(13);
bt.add(12);
bt.add(10);
bt.add(4);
bt.add(19);
bt.add(16);
bt.add(9);
bt.bfs();

console.log('----');
bt.delete(4)
bt.bfs();

/*
bt.add(99);
console.log('----');
bt.bfs();
*/
