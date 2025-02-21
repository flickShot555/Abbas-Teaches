# Student Grades Calculator in Python

# Taking input for number of students
num_students = int(input("Enter the number of students: "))
grades = []

# Taking input for grades
for i in range(num_students):
    grade = float(input(f"Enter grade for student {i+1}: "))
    grades.append(grade)

# Calculating statistics
average = sum(grades) / num_students
highest = max(grades)
lowest = min(grades)

# Displaying results
print(f"\nAverage Grade: {average:.2f}")
print(f"Highest Grade: {highest:.2f}")
print(f"Lowest Grade: {lowest:.2f}")
