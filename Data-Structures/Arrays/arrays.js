const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Taking input for number of students
rl.question("Enter the number of students: ", (numStudents) => {
  numStudents = parseInt(numStudents);
  let grades = [];
  let count = 0;

  // Function to take grades input
  const takeInput = () => {
    if (count < numStudents) {
      rl.question(`Enter grade for student ${count + 1}: `, (grade) => {
        grades.push(parseFloat(grade));
        count++;
        takeInput();
      });
    } else {
      // Calculating statistics
      let sum = grades.reduce((a, b) => a + b, 0);
      let highest = Math.max(...grades);
      let lowest = Math.min(...grades);
      let average = sum / numStudents;

      // Displaying results
      console.log(`\nAverage Grade: ${average.toFixed(2)}`);
      console.log(`Highest Grade: ${highest.toFixed(2)}`);
      console.log(`Lowest Grade: ${lowest.toFixed(2)}`);

      rl.close();
    }
  };

  takeInput();
});
