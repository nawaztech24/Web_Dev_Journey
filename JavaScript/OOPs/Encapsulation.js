class BankAccount {
    #balance; // Private property

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    showBalance() {
        console.log(this.name + "'s balance is ₹" + this.#balance);
    }

    deposit(amount) {
        this.#balance = this.#balance + amount;
        console.log("₹" + amount + " deposited successfully");
    }
}

const account = new BankAccount("Nawaz", 5000);

account.showBalance();

account.deposit(2000);

account.showBalance();

// This will give an error because #balance is private
// console.log(account.#balance);