// scriptHiring.js
// Name: Wyson Kong
// Lab1 - Dynamic Age Calculator

// Step 1: Creates a function called calculateAge with the parameter of year
function calculateAge(year) {
    // Step 2: creates a variable called currentYear with the value of the current year using Date().getFullYear()
    const currentYear = new Date().getFullYear();

    // Step 3: returns value of currentYear minus the year in the calculateAge function
    return currentYear - year;
}

// Step 4: asks a prompt to the user for their input of their birth year
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: creates a variable birthYear saves user input and changes the user input into a number from a string
const birthYear = Number(input);

// Step 6: if else statement that checks to see if the input is a valid number
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: prints "No valid year provided." when the input is not a valid number
    console.log("No valid year provided.");
} else {
    // Step 8: creates a variable called age with the value returned from the function calculateAge(birthYear)
    const age = calculateAge(birthYear);

    // Step 9: prints "Your age is:" with the saved age from the function
    console.log("Your age is:", age);
}