// C# Implementation of Inheritance in OOP

using System;

// Base class representing a generic person
class Person {
    protected string Name;
    protected int Age;
    
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }
    
    public void Introduce() {
        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
    }
}

// Derived Class
class Teacher : Person {
    private string Subject;
    
    public Teacher(string name, int age, string subject) : base(name, age) {
        Subject = subject;
    }
    
    public void Teach() {
        Console.WriteLine($"I am teaching {Subject}.");
    }
}

// Example Usage
class Program {
    static void Main() {
        Teacher t1 = new Teacher("Alice", 35, "Mathematics");
        t1.Introduce();
        t1.Teach();
    }
}
