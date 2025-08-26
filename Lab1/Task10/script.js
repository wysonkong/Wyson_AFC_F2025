// script.js
// Name: Wyson Kong
// Task10 - How Long Until Graduation

// Step 1: creates function getToday with arrow function that gets today's date
const getToday = () => {
    return new Date();
};

// Step 2: creates var today storing the date with getToday()
const today = getToday();

// Step 3: creates an array with the days of the week hardcoded and a var weekday that gets the day of the week value from today.getDay()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: creates an array with months hardcoded and multiple vars year, month, and day that gets their value from the array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Step 5: creates function getSuffix with arrow function that will concatenate the correct suffix based off the modules of the date
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Step 6: prints the weekday and the formatted date to console
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: creates var graduationDate, diff, and daysRemaining to return the result of the graduationDate - today's date with the remaining amount of days let to graduation using daysRemaining
const graduationDate = new Date("2025-11-13");

const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: prints the amount of days remaining to console
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");