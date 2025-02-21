// C++ Implementation of a Singly Linked List
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

class LinkedList {
public:
    Node* head;
    LinkedList() { head = nullptr; }

    void insert(int data) {
        Node* newNode = new Node(data);
        if (!head) {
            head = newNode;
            return;
        }
        Node* last = head;
        while (last->next) {
            last = last->next;
        }
        last->next = newNode;
    }

    void deleteNode(int key) {
        Node* temp = head, *prev = nullptr;
        if (temp && temp->data == key) {
            head = temp->next;
            delete temp;
            return;
        }
        while (temp && temp->data != key) {
            prev = temp;
            temp = temp->next;
        }
        if (!temp) return;
        prev->next = temp->next;
        delete temp;
    }

    void display() {
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "None" << endl;
    }
};

int main() {
    LinkedList ll;
    ll.insert(10);
    ll.insert(20);
    ll.insert(30);
    ll.display();
    ll.deleteNode(20);
    ll.display();
    return 0;
}
