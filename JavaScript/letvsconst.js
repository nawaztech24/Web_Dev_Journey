// 1. LET - VALUE CAN BE REASSIGNED


// Create a variable called score using let
let score = 10;

// Print the current value
console.log("Initial score:", score);

// Reassign a new value to score
// This is allowed because score was declared with let
score = 20;

// Print the new value
console.log("Updated score:", score);



// 2. CONST - VALUE CANNOT BE REASSIGNED


// Create a constant variable
const name = "Nawaz";

// Print the value
console.log("Name:", name);

// We cannot reassign a const variable
// Uncomment the next line to see the error

// name = "Ali";

// 3. LET CAN BE DECLARED WITHOUT A VALUE


// Declare a variable without giving it a value
let age;

// Currently age contains undefined
console.log("Age before assignment:", age);

// Give age a value later
age = 23;

// Print the new value
console.log("Age after assignment:", age);



// 4. CONST MUST HAVE A VALUE


// This is correct
const country = "India";

console.log("Country:", country);

// This is NOT allowed
// Uncomment it to see a SyntaxError

// const city;

// const variables must be initialized
// when they are declared



// 5. CONST WITH OBJECTS


// Create an object using const
const student = {
    name: "Nawaz",
    age: 23
};

// Print the original object
console.log("Original student:", student);

// Change a property inside the object
// This is allowed even though student uses const
student.age = 24;

// Print the modified object
console.log("Updated student:", student);


// We cannot assign a completely new object
// to the student variable

// Uncomment this to see the error:

// student = {
//     name: "Ali",
//     age: 25
// };


// IMPORTANT:
//
// student.age = 24
// Allowed because we modify the SAME object.
//
// student = { name: "Ali" }
//  Not allowed because we try to assign a NEW object.



// 6. CONST WITH ARRAYS


// Create an array using const
const fruits = ["Apple", "Mango"];

// Print the original array
console.log("Original fruits:", fruits);

// Add a new item to the same array
// This is allowed
fruits.push("Banana");

// Print the updated array
console.log("After push:", fruits);

// Change the first element
// This is also allowed
fruits[0] = "Orange";

// Print the updated array
console.log("After changing first item:", fruits);


// But we cannot assign a completely new array

// Uncomment this to see the error:

// fruits = ["Grapes", "Watermelon"];


// IMPORTANT:
//
// fruits.push("Banana")
//  Modifying the SAME array.
//
// fruits = ["Grapes"]
//  Assigning a completely NEW array.



// 7. LET AND CONST ARE BLOCK SCOPED


// Start an if block
if (true) {

    // This variable exists only inside this block
    let message = "Hello from let";

    // This constant also exists only inside this block
    const language = "JavaScript";

    // Both work here because we are inside the block
    console.log(message);
    console.log(language);
}

// Outside the block, message and language
// are not available.

// Uncomment these lines to see ReferenceError:

// console.log(message);
// console.log(language);


// FINAL SIMPLE EXAMPLE
// Use let because the value will change
let gameScore = 0;

// Change the score
gameScore = 10;

// Change it again
gameScore = 20;

console.log("Final game score:", gameScore);


// Use const because we don't want
// to assign a new value to playerName
const playerName = "Nawaz";

console.log("Player name:", playerName);