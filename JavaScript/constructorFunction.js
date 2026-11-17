// This is a constructor function.
// It is used as a blueprint to create BankAccount objects.
function BankAccount(name, balance) {

    // Check if the balance is negative.
    if (balance < 0) {

        // new Error() creates an Error object.
        // throw throws that error and stops the constructor.
        throw new Error("Balance cannot be negative");
    }

    // 'this' refers to the new object being created.
    // Store the received 'name' in the new object's name property.
    this.name = name;

    // Store the received 'balance' in the new object's balance property.
    this.balance = balance;

    // Create a method called showBalance for this object.
    this.showBalance = function () {

        // Here 'this' refers to the object that calls showBalance().
        console.log(this.name + " has ₹" + this.balance);
    };
}


// try contains code that might produce or throw an error.
try {

    // 'new' creates a new object using the BankAccount constructor.
    // Inside BankAccount, 'this' will refer to this newly created object.
    const account1 = new BankAccount("Nawaz", 5000);

    // Calls the showBalance method of account1.
    // Here 'this' inside showBalance refers to account1.
    account1.showBalance();


    // Now we try to create another account.
    // -1000 is invalid because our constructor does not allow
    // a negative starting balance.
    const account2 = new BankAccount("Ali", -1000);

    // This line will NOT execute because the line above throws an error.
    account2.showBalance();

} catch (error) {

    // If an error is thrown inside try,
    // JavaScript jumps directly to this catch block.

    // 'error' contains the Error object that was thrown.

    // error.message gives us the message:
    // "Balance cannot be negative"
    console.log("Error:", error.message);
}