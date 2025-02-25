# Python Implementation of a Queue using List

class Queue:
    def __init__(self):
        self.queue = []
    
    def enqueue(self, item):
        """Add an item to the queue."""
        self.queue.append(item)
        print(f"Enqueued: {item}")
    
    def dequeue(self):
        """Remove an item from the queue."""
        if self.is_empty():
            print("Queue is empty!")
            return None
        return self.queue.pop(0)
    
    def is_empty(self):
        """Check if the queue is empty."""
        return len(self.queue) == 0
    
    def front(self):
        """Get the front element of the queue."""
        if self.is_empty():
            print("Queue is empty!")
            return None
        return self.queue[0]
    
    def display(self):
        """Display the queue."""
        print("Queue:", self.queue)

# Example Usage
q = Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.display()
print("Dequeued:", q.dequeue())
q.display()
