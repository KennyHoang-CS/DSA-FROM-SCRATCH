
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next; 
    }
};

class Queue {
    constructor(front = null, end = null) {
        this.front = front;
        this.end = end; 
        this.size = 0; 
    }

    // Enqueue: Add an element to the end of the queue.
    enqueue(data) {
        
        // make a new node.
        let newNode = new Node(data);

        // is queue empty?
        if (this.isEmpty()) {
            this.front = newNode;
            this.end = newNode; 
            ++this.size; 
            return; 
        }
        
        // queue has at least 1 node. 
        if (this.size === 1) {
            this.end.next = newNode;
            this.end = newNode; 
            ++this.size; 
            return; 
        }

        // queue has at least 2 nodes. 
        this.end.next = newNode; 
        this.end = newNode; 
        ++this.size; 
    }

    
    // Dequeue: Remove an element from the front of the queue.
    dequeue() {
        if (this.isEmpty()) {
            console.log('QUEUE EMPTY.');
            return null; 
        }

        // Get the data from the front of queue. 
        let item = this.front.data; 

        // if queue only has one element. 
        if (this.size === 1) {
            this.front = null;
            this.end = null; 
            --this.size;
            return item; 
        }

        // queue has at least 2 elements. 
        this.front = this.front.next;
        --this.size; 
        return item; 
    }
    
    // IsEmpty: Check if the queue is empty.
    isEmpty () {
        return this.size === 0; 
    }
    
    // Peek: Get the value of the front of the queue without removing it.
    peek() {
        if (this.size >= 1) {
            return this.front.data;
        } 
    }

    // peekAtEnd: Get the value of the end of the queue without removing it.
    peekAtEnd() {
        if (this.size >= 1) {
            return this.end.data; 
        }
    }
};


module.exports = {
    Queue, 
};