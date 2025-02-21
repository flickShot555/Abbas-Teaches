import java.util.Scanner;

public class StudentGrades {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking input for number of students
        System.out.print("Enter the number of students: ");
        int numStudents = scanner.nextInt();
        double[] grades = new double[numStudents];

        // Taking input for grades
        for (int i = 0; i < numStudents; i++) {
            System.out.print("Enter grade for student " + (i + 1) + ": ");
            grades[i] = scanner.nextDouble();
        }

        // Calculating statistics
        double sum = 0, highest = grades[0], lowest = grades[0];
        for (double grade : grades) {
            sum += grade;
            if (grade > highest) highest = grade;
            if (grade < lowest) lowest = grade;
        }

        double average = sum / numStudents;

        // Displaying results
        System.out.printf("\nAverage Grade: %.2f\n", average);
        System.out.printf("Highest Grade: %.2f\n", highest);
        System.out.printf("Lowest Grade: %.2f\n", lowest);
        
        scanner.close();
    }
}
