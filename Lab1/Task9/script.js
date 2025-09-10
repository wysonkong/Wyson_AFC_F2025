// scriptHiring.js
// Name: Wyson Kong
// Task9 - Weekday Detector

// Step 1: creates function getWeekday with arrow function requiring no parameter
const getWeekday = () => {
    // Step 2: creates var today using the Date() object to obtain the today's date
    const today = new Date();

    // Step 3: creates var dayNumber storing today's number from .getDay() from values 0 Sunday - 6 Saturday
    const dayNumber = today.getDay();

    // Step 4: creates an array called days with the days of the week hardcoded
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Step 5: returns the days in the array according to today's dayNumber
    return days[dayNumber];
};

// Step 6: calls the function getWeekday() and prints that to console
console.log("Today is:", getWeekday());