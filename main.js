"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//          100 days of coding challenge ( DAY 49 )
// Question 01
// ---This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a, b) => {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 8, 3); // Outputs: 11
// Question 02
// ---This array of numbers will be filtered
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// Question 03
// --Function that uses a callback pattern, including error handling
function fetchData(callback) {
    // --Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    // --Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // --No error, data is fetched successfully
    }
    else {
        callback(error); // --Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
    if (error) {
        console.error(error.message); // --Handles the error
    }
    else {
        console.log(data); // --Processes the data
    }
});
