
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
    
    minDepth() {
        
        // check if root exists. 
        if (!root) return 0;
    
        let min = Number.MAX_SAFE_INTEGER;  
    
        findMin(root, 1);
    
        return min; 
    
        function findMin(node, depth) {
        
            // if node is empty
            if (!node) return 0; 
        
            // if its a leaf node, get Math.min of depths
            if (!node.left && !node.right) {
                min = Math.min(min, depth);
            }
        
        
            // traverse left
            findMin(node.left, depth + 1);    
    
            // traverse right 
            findMin(node.right, depth + 1);
        }  
    }

    maxDepth() {

        // check if tree exists.
        if (!root) return 0; 

        let max = 0; 
        findMax(root, 1); 
        return max; 

        function findMax(node, depth) {
            if (!node) return 0;
        
            // if leaf node
            if (!node.left && !node.right) max = Math.max(max, depth); 
        
            findMax(node.left, depth + 1); 
            findMax(node.right, depth + 1); 
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

    // helpers

    search(target) {
        
        let q = [];
        q.push(this.root);
        
        // traverse in-order to locate the node. 
        while (q.length > 0) {
            let currentNode = q.shift(); 

            // did we find the target node?
            if (currentNode.data === target) {
                return true; 
            }

            // queue in left child if exists.
            if (currentNode.left !== null) {
                q.push(currentNode.left);
            }

            // queue in right child if exists.
            if (currentNode.right !== null) {
                q.push(currentNode.right); 
            }
        }

        // return false if we didn't find the target while traversing. 
        return false; 
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
bt.add(40);
bt.add(45);
bt.bfs();

console.log('----');
console.log(bt.minDepth())

/*
bt.add(99);
console.log('----');
bt.bfs();
*/

module.exports = {
    BinaryTree
}



            
        