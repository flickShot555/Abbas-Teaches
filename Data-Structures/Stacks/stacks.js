// JavaScript Implementation of a Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
        console.log(`Pushed: ${value}`);
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Stack Underflow!");
            return;
        }
        console.log(`Popped: ${this.items.pop()}`);
    }

    peek() {
        if (this.items.length === 0) {
            console.log("Stack is empty!");
            return;
        }
        console.log(`Top Element: ${this.items[this.items.length - 1]}`);
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example Usage
const s = new Stack();
s.push(10);
s.push(20);
s.peek();
s.pop();
s.peek();
