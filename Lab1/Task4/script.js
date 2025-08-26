// script.js
// Name: Wyson Kong
// Task4 - Event Countdown with Date Object

// Step 1: creates a function called calculateDaysUntil that will countdown with the parameter of the eventDate
function calculateDaysUntil(eventDate) {
    // Step 2: creates variable today with today's date using Date()
    const today = new Date();

    // Step 3: creates variable event with the eventDate as an actual Date object
    const event = new Date(eventDate);

    // Step 4: creates variable diff with event date - today's date
    const diff = event - today;

    // Step 5: creates variable days and converting the diff to milliseconds back to days
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: returns days as the result
    return days;
}

// Step 7: creates variable eventDate storing user input from the prompt "Enter event date (YYYY-MM-DD):"
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: creates variable dateFormat while ensuring that the date format is correct with regex of 4 year, 2 months, 2 days
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: creates variable daysRemaining storing the result of function calculateDaysUntil
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: Log result to the console
console.log("Days until the event:", daysRemaining);