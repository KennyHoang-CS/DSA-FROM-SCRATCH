
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
        if (!this.root) return 0;
    
        let min = Number.MAX_SAFE_INTEGER;  
    
        findMin(this.root, 1);
    
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
        if (!this.root) return 0; 

        let max = 0; 
        findMax(this.root, 1); 
        return max; 

        function findMax(node, depth) {
            if (!node) return 0;
        
            // if leaf node
            if (!node.left && !node.right) max = Math.max(max, depth); 
        
            findMax(node.left, depth + 1); 
            findMax(node.right, depth + 1); 
        }
    }

    maxSumPath() {

        // check if tree exists.
        if (!this.root) return 0;

        let pathResult = 0; 
        findMaxSumPath(this.root);
        return pathResult; 
        
        function findMaxSumPath(node) {

            // if node doesn't exist.
            if (!node) return 0; 
            
            // calculate left path of current node.
            let left = findMaxSumPath(node.left);
            // calculate right path of current node. 
            let right = findMaxSumPath(node.right);

            // get max path of result. 
            pathResult = Math.max(node.data + left + right); 

            return Math.max(node.data + left, node.data + right);
        }
    }

    static bothTreesEqual(tree1, tree2) {

        let q1 = [];
        let q2 = []; 
        q1.push(tree1.getRoot());
        q2.push(tree2.getRoot());

        // use bfs and compare tree1 node with tree2 node. 
        while (q1.length > 0) {
            let node1 = q1.shift(); 
            let node2 = q2.shift();

            if (node1.data !== node2.data) return false; 

            // check if both trees have a left child. 
            if (node1.left !== null && (node2.left !== null)) {
                q1.push(node1.left);
                q2.push(node2.left); 
            }

            // check if both trees have a right child. 
            if (node1.right !== null && (node2.right !== null)) {
                q1.push(node1.right);
                q2.push(node2.right); 
            }
        }
        // if we didn't return false, then both trees are equal then return true. 
        return true; 
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

    getRoot() {
        return this.root;
    }
}

module.exports = {
    BinaryTree
}



            
        