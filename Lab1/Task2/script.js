// scriptHiring.js
// Name: Wyson Kong
// Lab2 - Simple Interest Calculator

// Step 1: creates a function called calculateSimpleInterest with the parameters principal, rate, and time
function calculateSimpleInterest(principal, rate, time) {
    // returns the value with the formula using (principal * rate * time) / 100
    return (principal * rate * time) / 100;
}

// Step 2: creates a variable principal with the value that the user inputs with the prompt "Enter the principal amount:"
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: creates a variable rate with the value that the user inputs with the prompt "Enter the rate of interest:"
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: creates a variable time with the value that the user inputs with the prompt "Enter the time in years:"
const time = Number(prompt("Enter the time in years:"));

// Step 5: creates a variable interest and stores the value returned from the function calculateSimpleInterest(principal, rate, time)
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: prints "Your simple interest is:" with the value stores in interest
console.log("Your simple interest is:", interest);