# Python Implementation of Inheritance in OOP

class Person:
    """Base class representing a generic person."""
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

# Derived Class
class Teacher(Person):
    """Derived class representing a teacher, inheriting from Person."""
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def teach(self):
        print(f"I am teaching {self.subject}.")

# Example Usage
t1 = Teacher("Alice", 35, "Mathematics")
t1.introduce()
t1.teach()
