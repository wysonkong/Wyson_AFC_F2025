// script.js
// Name: Wyson Kong
// Task5 - Temperature Classifier

// Step 1: creates a function named classifyTemperature with the parameter celsius
function classifyTemperature(celsius) {
    // Step 2: creates var fahrenheit storing the value from the formula (celsius * (9 / 5)) + 32;
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: if else statement that returns different statements based off of fahrenheit temperature
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: creates var input that prompts for user input of temp of celsius
const input = prompt("Enter temperature in Celsius:");

// Step 5: var celsius stores input as a number instead of string
const celsius = Number(input);

// Step 6: if else that ensures that the user input is a valid number
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: creates var classification if the number is valid storing the value from the function classifyTemperature(celsius)
    const classification = classifyTemperature(celsius);

    // Step 8: prints "The temperature is:" and the result
    console.log("The temperature is:", classification);
}