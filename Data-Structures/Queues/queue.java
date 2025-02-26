// Java Implementation of a Queue using LinkedList
import java.util.LinkedList;
import java.util.Queue;

class CustomQueue {
    private Queue<Integer> queue;

    public CustomQueue() {
        queue = new LinkedList<>();
    }

    public void enqueue(int item) {
        queue.add(item);
        System.out.println("Enqueued: " + item);
    }

    public void dequeue() {
        if (queue.isEmpty()) {
            System.out.println("Queue is empty!");
            return;
        }
        System.out.println("Dequeued: " + queue.poll());
    }

    public void front() {
        if (queue.isEmpty()) {
            System.out.println("Queue is empty!");
            return;
        }
        System.out.println("Front element: " + queue.peek());
    }

    public void display() {
        System.out.println("Queue: " + queue);
    }

    public static void main(String[] args) {
        CustomQueue q = new CustomQueue();
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        q.display();
        q.dequeue();
        q.display();
    }
}
