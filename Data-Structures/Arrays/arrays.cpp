#include <iostream>
#include <limits>
using namespace std;

int main() {
    int numStudents;

    // Taking input for number of students
    cout << "Enter the number of students: ";
    cin >> numStudents;

    double grades[numStudents];

    // Taking input for grades
    for (int i = 0; i < numStudents; i++) {
        cout << "Enter grade for student " << i + 1 << ": ";
        cin >> grades[i];
    }

    // Calculating statistics
    double sum = 0, highest = grades[0], lowest = grades[0];

    for (int i = 0; i < numStudents; i++) {
        sum += grades[i];
        if (grades[i] > highest) highest = grades[i];
        if (grades[i] < lowest) lowest = grades[i];
    }

    double average = sum / numStudents;

    // Displaying results
    cout << "\nAverage Grade: " << average << endl;
    cout << "Highest Grade: " << highest << endl;
    cout << "Lowest Grade: " << lowest << endl;

    return 0;
}
