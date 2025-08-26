// script.js
// Name: Wyson Kong
// Task6 - Student Array Operations

// Step 1: creates an array students and hardcodes the array with names and age
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: creates a function updateStudentAge in the array with arrow function
const updateStudentAge = (array) => {
    // Step 3: creates var studentName and asks user for the name they want to update
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: creates var student that filters the array with studentName by lowercasing the user input and the name in the array so they match
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: if the student is not found by the filter it will print "Error: Student not found."
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: creates var newAge that asks the user to enter the new age and stores as a number instead of string
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: ensures the user input is a valid number otherwise it will print Error message
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: updates the student found through filter's age with the newAge stored
    student.age = newAge;

    // Step 9: prints the updated student array
    console.log("Updated students:", array);
};

// Step 10: calls the function made with the arrow function with the array students
updateStudentAge(students);