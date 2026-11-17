// Parent class
class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    // Getter
    get salary() {
        return this.#salary;
    }

    // Setter
    set salary(newSalary) {
        if (newSalary < 0) {
            console.log("Salary cannot be negative");
            return;
        }

        this.#salary = newSalary;
    }

    // Method that child classes can override
    work() {
        console.log(this.name + " is working");
    }

    showDetails() {
        this.#displayPrivateDetails();
    }

    // Private method for abstraction
    #displayPrivateDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.#salary);
    }
}


// Child class
class Developer extends Employee {
    work() {
        console.log(this.name + " is writing code");
    }
}


// Another child class
class Designer extends Employee {
    work() {
        console.log(this.name + " is designing UI");
    }
}


// Creating objects
const developer = new Developer("Nawaz", 50000);
const designer = new Designer("Ali", 40000);


// Getter
console.log(developer.salary);


// Setter
developer.salary = 60000;

console.log(developer.salary);


// Invalid value
developer.salary = -5000;


// Polymorphism
developer.work();
designer.work();


// Abstraction
developer.showDetails();