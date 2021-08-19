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

    delete(target) {

        // does the list even exist?
        if (this.head === null) {
            return; 
        }

        // only one node in list? Check if its the target. 
        if (this.size === 1) {
            if (this.head.data === target) {
                this.head = null;
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
    };
    
    traversal() {
        let currentPtr = this.head; 
        while (currentPtr) {
            console.log(currentPtr.data);
            currentPtr = currentPtr.next; 
        }
    };

    getSize() {
        return this.size; 
    };
}

let li = new LinkedList();
li.add(new Node(1));
li.add(new Node(2));
li.add(new Node(5));
li.add(new Node(3));
li.add(new Node(10));
li.traversal();
li.delete(10);
li.add(new Node(99));
console.log('---------')
li.traversal();
