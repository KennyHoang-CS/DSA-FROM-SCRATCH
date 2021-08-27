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

    add(data) {
        
        // create a new node.
        let newNode = new Node(data);
        
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

    addAtPosition(data, pos) {

        // create new node.
        let newNode = new Node(data);

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
    };

    append(data) {

        // create a new node.
        let newNode = new Node(data);

        // append new node to the tail.
        this.tail.next = newNode;
        this.tail = newNode; 
        ++this.size; 
    }

    unshift(data) {
        // add a new node with data to the head; 

        // create a new node. 
        let newNode = new Node(data); 

        newNode.next = this.head; 
        this.head = newNode; 
        ++this.size; 
    }

    // Remove & return head value. Throws error if list is empty.
    shift() {

        if (this.head === null) {
            console.log('LIST EMPTY.');
            return; 
        }
        
        let temp = this.head.data; 
        this.head = this.head.next; 
        --this.size; 
        return temp; 
    }

    // remove and return the tail value. 
    pop() {

        // are we popping from an empty list? 
        if (!this.head) {
            console.log('LIST EMPTY.');
            return; 
        }

        // are we popping from a list with one node?  
        if (this.size === 1) {
            let temp = this.tail.data; 
            this.head = null; 
            this.tail = null; 
            --this.size;
            return temp; 
        }

        // there exists at least 2 nodes in the list. 
        let currPtr = this.head.next;
        let prevPtr = this.head;
        // set up pointers position. 
        while (currPtr) {
            currPtr = currPtr.next.next;
            prevPtr = prevPtr.next; 
        }
        let temp = prevPtr.next.data; 
        prevPtr.next = currPtr; 
        this.tail = prevPtr; 
        --this.size; 
        return temp;  
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

        // list has at least 2 nodes. 
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
    };

    deleteAtPosition(pos) {
        if (pos < 0 || pos > this.size) {
            console.log('Position to be deleted is invalid.');
            return;
        }

        // are we deleting a node at position 1 and the list size is 1?
        if (this.size === 1 && (pos === 1)) {
            this.head = null;
            this.tail = null; 
            --this.size; 
            return; 
        }

        // list has at least 2 nodes, and the position is valid. 
        
        // if head is being deleted, move head to next node.
        if (pos === 1) {
            this.head = this.head.next;
            --this.size;
            return; 
        }
        
        // set up the pointers placement prior to deletion. 
        let idx = 1; 
        let currPtr = this.head.next;
        let prevPtr = this.head; 
        while (idx < pos - 1) {
            currPtr = currPtr.next;
            prevPtr = prevPtr.next; 
            ++idx; 
        }

        // adjust tail if tail node was deleted.  
        if (this.size === 2 && (pos === 2)) {
            this.tail = prevPtr;
        }

        // pointers are correct position, delete now.  
        prevPtr.next = currPtr.next; 
        --this.size;  
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
                return true; 
            }
            ptr = ptr.next; 
        }
        
        return false;
    };

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
    };

    // Return the average of numbers in the linked list. 
    average() {

        // check if list empty. 
        if (this.isListEmpty()) {
            console.log("LIST EMPTY.");
            return; 
        }

        // traverse the linked list, add its node value into a sum. 
        let headPtr = this.head;
        let sum = 0; 
        while (headPtr) {
            sum += headPtr.data; 
            headPtr = headPtr.next; 
        }

        // return the average.
        return sum / this.size; 
    }

    // helpers 

    getSize() {
        return this.size; 
    };

    getHead() {
        return this.head; 
    };

    getTail() {
        return this.tail; 
    };

    isListEmpty() {
        return this.size === 0; 
    };
}

module.exports = {
    LinkedList
}

