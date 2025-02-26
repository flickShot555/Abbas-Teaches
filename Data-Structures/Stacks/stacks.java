// Java Implementation of a Stack
class Stacks {
    private int arr[];
    private int top;
    private int capacity;

    public Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    public void push(int value) {
        if (top >= capacity - 1) {
            System.out.println("Stack Overflow!");
            return;
        }
        arr[++top] = value;
        System.out.println("Pushed: " + value);
    }

    public void pop() {
        if (top < 0) {
            System.out.println("Stack Underflow!");
            return;
        }
        System.out.println("Popped: " + arr[top--]);
    }

    public void peek() {
        if (top < 0) {
            System.out.println("Stack is empty!");
            return;
        }
        System.out.println("Top Element: " + arr[top]);
    }

    public boolean isEmpty() {
        return top < 0;
    }

    public static void main(String[] args) {
        Stack s = new Stack(100);
        s.push(10);
        s.push(20);
        s.peek();
        s.pop();
        s.peek();
    }
}
