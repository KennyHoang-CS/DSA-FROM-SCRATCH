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
        } else {
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

        // does the list even exist?
        if (this.head === null) {
            return; 
        }

        // are we deleting the head? 
        if (this.head.data === target && (this.size > 1)) {
            this.head = this.head.next; 
            --this.size; 
            return; 
        }

        // only one node in list? Check if its the target. 
        if (this.size === 1) {
            if (this.head.data === target) {
                this.head = null;
                this.tail = null; 
                --this.size;
            } else {
                return; 
            }
        }

        // list has at least 2 nodes. 
        let currPtr = this.head.next; 
        let prevPtr = this.head;  
        while (currPtr) {
            if (currPtr.data === target) {
                if (currPtr.next === null) {
                    this.tail = prevPtr;
                } else {
                    prevPtr.next = prevPtr.next.next;
                }
            } 
            currPtr = currPtr.next; 
            prevPtr = prevPtr.next; 
        }
        --this.size; 
    };
    
    traversal() {
        let currentPtr = this.head; 
        while (currentPtr) {
            console.log(currentPtr.data);
            currentPtr = currentPtr.next; 
        }
    };

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
}

let li = new LinkedList();
li.add(new Node(1));
/*
li.add(new Node(2));
li.add(new Node(5));
li.add(new Node(3));
li.add(new Node(10));
*/

// li.delete(1);
// li.delete(10);
// li.delete(3);
 console.log(li.traversal());
// console.log(li.getHead().data);
// console.log(li.getTail().data);