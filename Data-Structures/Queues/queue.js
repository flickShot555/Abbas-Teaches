// JavaScript Implementation of a Queue using Array

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        console.log(`Enqueued: ${item}`);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        console.log(`Dequeued: ${this.queue[0]}`);
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        console.log(`Front element: ${this.queue[0]}`);
    }

    display() {
        console.log("Queue:", this.queue);
    }
}

// Example Usage
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.display();
q.dequeue();
q.display();
