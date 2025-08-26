// script.js
// Name: Wyson Kong
// Task8 - Shopping List Operations

// Step 1: creates array shoppingList and hardcodes into the array
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: creates a function modifyItem with arrow function taking the array and new item
const modifyItem = (list, newItem) => {
    // Step 3: adds the new item to the array entered into list
    list.push(newItem);

    // Step 4: prints the updated list
    console.log("Updated shopping list:", list);
};

// Step 5: creates var userItem storing the user input from the prompt of the new item
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: ensures the user input is valid and not empty else prints error message
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: calls the function modifyItem with the array shoppingList called and the new item that is prompted from the user.
    modifyItem(shoppingList, userItem);
}