'use strict';

// T 4
/*
Define a type alias named Product that can represent either an ElectronicDevice or a Book.
Implement instances of the Product type for a sample electronic device and a book, prompting the user for details.
Display the details of each product, including the properties specific to the chosen type.
*/
// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = String(prompt("Anna merkki:")); /* TODO: Get user input for brand */
    const model = String(prompt("Anna malli:")); /* TODO: Get user input for model */
    return {
        type: "electronic",
        brand,
        model, // TODO: return object containing brand and model
    };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = String(prompt("Anna kirjan nimi:")); /* TODO: Get user input for title */
    const author = String(prompt("Anna kirjailija:")); /* TODO: Get user input for author */
    // TODO: return object containing title and author
    return {
        type: "book",
        title,
        author,
    };
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === "electronic") {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log("Electronic Device Details:");
displayProductDetails(electronicProduct);
console.log();
console.log("Book Details:");
displayProductDetails(bookProduct);
console.log("");
console.log("t5");
/*

Write a function that takes a string or number and returns its length if it's a string or the square of the number if it's a number. Use union types to handle both cases.

Prompt the user to enter a value as either a string or a number.
Define a TypeScript function that takes a parameter of type string | number.
Use a type guard to check the actual type of the parameter.
If the parameter is a string, display its length. If it's a number, display its square.

*/
// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    if (typeof value === "string") {
        return value.length;
    }
    // if type is number return the square of the number
    else if (typeof value === "number") {
        return value * value;
    }
}
// Prompt the user to enter a value as either a string or a number
const userInput = prompt("Anna arvo (string / number):");
/* TODO: If userInput is numeric, convert it to number else keep it as string */
const parsedValue = userInput !== null && !isNaN(parseFloat(userInput))
    ? parseFloat(userInput)
    : userInput || "";
// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
// ********' t6 *********
console.log("");
console.log("t6");
// Test the function with arrays of different types
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry", "date"];
const mixedArray = [true, 42, "hello", false];
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
// 1. funktio
// Create a TypeScript function named reverseArray that takes an array as a parameter with a generic type parameter T.
const reverseArray = (taulukko) => {
    // 3. Return the reversed array.
    return taulukko.reverse();
};
console.log(reverseArray(numberArray));
console.log(reverseArray(stringArray));
console.log(reverseArray(mixedArray));
