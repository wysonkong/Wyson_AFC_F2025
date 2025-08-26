// script.js
// Name: Wyson Kong
// Task3 - Favorite Color Selector

// Step 1: creates an array of strings called colors
let colors = ["red", "blue", "green"];

// Step 2: creates a function called addColor with colorArray as the parameter
function addColor(colorArray) {
    // Step 3: creates a variable newColor that stores the value from user input from prompt "Enter a color to add:"
    const newColor = prompt("Enter a color to add:");

    // Step 4: adds the value in newColor to the beginning of the array
    colorArray.unshift(newColor);

    // Step 5: prints "Updated colors:" with the new color added
    console.log("Updated colors:", colorArray);
}

// Step 6: calls the function addColor with the colors array
addColor(colors);