# Python Implementation of a Stack
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, value):
        self.items.append(value)
        print(f"Pushed: {value}")
    
    def pop(self):
        if not self.items:
            print("Stack Underflow!")
            return
        print(f"Popped: {self.items.pop()}")
    
    def peek(self):
        if not self.items:
            print("Stack is empty!")
            return
        print(f"Top Element: {self.items[-1]}")
    
    def is_empty(self):
        return len(self.items) == 0

# Example Usage
s = Stack()
s.push(10)
s.push(20)
s.peek()
s.pop()
s.peek()
