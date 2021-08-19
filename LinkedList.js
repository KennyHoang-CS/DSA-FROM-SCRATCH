class Node {
    constructor(data) {
        this.data = data;
        this.next = null; 
    }
}

class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head; 
        this.tail = tail;  
        this.size = 0; 
    };

    add(newNode) {
        if (this.head === null) {   // list is empty. 
            this.head = newNode;
            this.tail = newNode; 
        } else if (this.size === 1) {  // list with one node. 
            this.head.next = newNode; 
            this.tail = newNode; 
        } else {    // more than one nodes. 
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        ++this.size; 
    };

    addAtPosition(newNode, pos) {

        // check if its a valid position.
        if (pos < 0 || pos > this.size) {
            console.log(`Must be a valid position from 1-${this.size}`);
            return; 
        }
        
        // adding at the head? pos = 1. 
        if (pos === 1) {
            newNode.next = this.head;
            this.head = newNode; 
            ++this.size; 
            return;
        }

        // adding at the tail? 
        if (pos === this.size) {
            this.tail.next = newNode;
            this.tail = newNode;
            ++this.size; 
            return;
        }

        // set up the pointers at the position for new node placement. 
        let currPtr = this.head.next;
        let prev = this.head;  
        let idx = 1;
        while (idx < pos - 1) {
            prev = currPtr;  
            currPtr = currPtr.next;  
            ++idx;
        }

        // pointers are now at position, now insert new node. 
        prev.next = newNode; 
        newNode.next = currPtr; 
        ++this.size; 
    }

    delete(target) {

        // is list empty? 
        if (this.isListEmpty()) {
            console.log('List is empty. ');
            return; 
        }

        // list only has one node.
        if (this.size === 1) {
            if (this.head.data === target) {
                this.head = null;   // should delete the target node. 
                this.tail = null; 
            }
            --this.size; 
            return; 
        }

        let currPtr = this.head.next; 
        let prevPtr = this.head; 
        while (currPtr) {
            if (currPtr.data === target) {
                // did we deleted the tail? 
                if (currPtr.next === null) {
                    this.tail = prevPtr;
                }
                prevPtr.next = currPtr.next;
                --this.size;
                return;
            }
            currPtr = currPtr.next;
            prevPtr = prevPtr.next; 
        }

        // list has more than one node. 
    };
    
    traversal() {
        let currentPtr = this.head; 
        while (currentPtr !== null) {
            console.log(currentPtr.data);
            currentPtr = currentPtr.next; 
        }
    };

    search(target) {
        let ptr = this.head;
        while (ptr) {
            if (ptr.data === target) {
                console.log('search target found.');
                return ptr.data; 
            }
            ptr = ptr.next; 
        }
    }

    update(target, newValue) {
        let ptr = this.head;
        // traverse the list in O(N).
        while (ptr) {
            // did we find the node to modify? 
            if (ptr.data === target) {
                ptr.data = newValue; 
                return; 
            }
            ptr = ptr.next;
        }
    }

    // helpers 

    getSize() {
        return this.size; 
    };

    getHead() {
        return this.head; 
    }

    getTail() {
        return this.tail; 
    }

    isListEmpty() {
        return this.size === 0; 
    }
}



