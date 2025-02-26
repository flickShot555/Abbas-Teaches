// C++ Implementation of a Stack
#include <iostream>
using namespace std;

class Stack {
private:
    int arr[100];
    int top;
public:
    Stack() { top = -1; }
    
    void push(int value) {
        if (top >= 99) {
            cout << "Stack Overflow!" << endl;
            return;
        }
        arr[++top] = value;
        cout << "Pushed: " << value << endl;
    }
    
    void pop() {
        if (top < 0) {
            cout << "Stack Underflow!" << endl;
            return;
        }
        cout << "Popped: " << arr[top--] << endl;
    }
    
    void peek() {
        if (top < 0) {
            cout << "Stack is empty!" << endl;
            return;
        }
        cout << "Top Element: " << arr[top] << endl;
    }
    
    bool isEmpty() {
        return top < 0;
    }
};

// Example Usage
int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.peek();
    s.pop();
    s.peek();
    return 0;
}
