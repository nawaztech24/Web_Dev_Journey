class CoffeeMachine {

    makeCoffee() {
        this.#boilWater();
        this.#addCoffee();

        console.log("Coffee is ready");
    }

    // Private method
    #boilWater() {
        console.log("Boiling water...");
    }

    // Private method
    #addCoffee() {
        console.log("Adding coffee...");
    }
}

const machine = new CoffeeMachine();

machine.makeCoffee();

// These cannot be accessed outside the class
// machine.#boilWater();
// machine.#addCoffee();