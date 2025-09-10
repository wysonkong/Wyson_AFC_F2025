// scriptHiring.js
// Name: Wyson
// Task7 - Grade Classification

// Step 1: creates a function classifyGrade with arrow function to take in grades
const classifyGrade = (grade) =>
    // Step 2: uses conditional ternary operators to classify grades on parameters
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: creates var input storing the user input from the prompt enter a grade
const input = prompt("Enter a grade (0-100):");

// Step 4: creates var grade with the user input as a number instead of a string
const grade = Number(input);

// Step 5: ensures the user input is a valid number else prints error message
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: creates var classification calling the classifyGrade function with user input of grade and prints the result
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}