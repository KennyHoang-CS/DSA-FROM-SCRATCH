class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;  
    }
};

class Stack {
    constructor(top = null) {
        this.top = top; 
        this.size = 0; 
    }

    // pushing
    push(data) {

        // create a new node.
        let newNode = new Node(data); 

        // is stack empty?
        if (this.isEmpty()) {
            this.top = newNode; 
            ++this.size; 
            return; 
        } 

        // stack has at least one node.
        let prevNode = this.top;   
        this.top.next = newNode; 
        this.top = newNode;
        this.top.prev = prevNode;  
        ++this.size; 
    } 

    // peeking 
    peeking() {
        return this.top.data; 
    }

    // popping 
    pop() {
        let item = this.top;
        this.top = this.top.prev;
        return item.data; 
    }

    // is stack empty. 
    isEmpty() {
        return this.size === 0; 
    }
};

module.exports = { Stack };
