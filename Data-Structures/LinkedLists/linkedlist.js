// JavaScript Implementation of a Singly Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    delete(key) {
        let temp = this.head, prev = null;
        if (temp && temp.data === key) {
            this.head = temp.next;
            return;
        }
        while (temp && temp.data !== key) {
            prev = temp;
            temp = temp.next;
        }
        if (!temp) return;
        prev.next = temp.next;
    }

    display() {
        let temp = this.head;
        let output = "";
        while (temp) {
            output += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(output + "None");
    }
}

// Example usage
let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.display();
ll.delete(20);
ll.display();
