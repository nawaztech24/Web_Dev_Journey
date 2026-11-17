/********************************************************************
  JAVASCRIPT FUNCTIONS PRACTICE (1 TO 5)

  Concepts Covered:
  1. Function
  2. Nested Function
  3. Arrow Function
  4. Higher Order Function
  5. Function Returning Function (Closure)
********************************************************************/


/********************************************************************
  QUESTION 1

  Write a function named makeTea that takes one parameter,
  typeOfTea, and returns:
  "Making green tea"

  Store result in teaOrder
********************************************************************/

// Function declaration
function makeTea(typeOfTea) {

    // Return a string with tea name
    return "Making " + typeOfTea;
}

// Call function and pass argument
let teaOrder = makeTea("green tea");

// Print result
console.log("Q1:", teaOrder);



/********************************************************************
  QUESTION 2

  Create a function named orderTea

  Inside it create another function confirmOrder

  Return:
  "Order confirmed for chai"

  This is called Nested Function
********************************************************************/

// Outer function
function orderTea(teaType) {

    // Inner function (Nested Function)
    function confirmOrder() {

        // Accessing teaType from outer function
        return "Order confirmed for " + teaType;
    }

    // Calling inner function
    return confirmOrder();
}

// Store result
let orderResult = orderTea("chai");

// Print result
console.log("Q2:", orderResult);



/********************************************************************
  QUESTION 3

  Create an Arrow Function calculateTotal

  Parameters:
  price
  quantity

  Return:
  price * quantity

  Store result in totalCost
********************************************************************/

// Arrow Function
const calculateTotal = (price, quantity) => {

    // Return multiplication
    return price * quantity;
};

// Call function
let totalCost = calculateTotal(100, 5);

// Print result
console.log("Q3:", totalCost);



/********************************************************************
  QUESTION 4

  Create Higher Order Function

  processTeaOrder receives another function
  as parameter.

  Call makeTea("earl grey")

  Return result
********************************************************************/

// Function that takes another function
function processTeaOrder(makeTeaFunction) {

    // Calling received function
    return makeTeaFunction("earl grey");
}

// Pass function as argument
let teaResult = processTeaOrder(makeTea);

// Print result
console.log("Q4:", teaResult);



/********************************************************************
  QUESTION 5

  Function returning another function

  createTeaMaker returns a function

  Returned function accepts teaType

  Return:
  "Making green tea"

  Store returned function in teaMaker
********************************************************************/

// Higher Order Function
function createTeaMaker() {

    // Returning a new function
    return function(teaType) {

        // Return message
        return "Making " + teaType;
    };
}

// Store returned function
let teaMaker = createTeaMaker();

// Call returned function
let finalTea = teaMaker("green tea");

// Print result
console.log("Q5:", finalTea);



