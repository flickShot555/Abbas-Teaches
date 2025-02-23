// JavaScript Implementation of Inheritance in OOP

class Person {
    // Base class representing a generic person
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Derived Class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    
    teach() {
        console.log(`I am teaching ${this.subject}.`);
    }
}

// Example Usage
const t1 = new Teacher("Alice", 35, "Mathematics");
t1.introduce();
t1.teach();
