// Java Implementation of Inheritance in OOP

class Person {
    // Base class representing a generic person
    protected String name;
    protected int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

// Derived Class
class Teacher extends Person {
    private String subject;
    
    public Teacher(String name, int age, String subject) {
        super(name, age);
        this.subject = subject;
    }
    
    public void teach() {
        System.out.println("I am teaching " + subject + ".");
    }
}

// Example Usage
public class Main {
    public static void main(String[] args) {
        Teacher t1 = new Teacher("Alice", 35, "Mathematics");
        t1.introduce();
        t1.teach();
    }
}
