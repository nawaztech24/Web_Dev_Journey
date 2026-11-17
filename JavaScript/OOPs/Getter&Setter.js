class Student {
    #age; // Private property

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    // Getter
    get age() {
        return this.#age;
    }

    // Setter
    set age(newAge) {
        if (newAge < 0) {
            console.log("Age cannot be negative");
            return;
        }

        this.#age = newAge;
    }
}

const student = new Student("Nawaz", 23);

// Getter is automatically called
console.log("Age:", student.age);

// Setter is automatically called
student.age = 24;

// Getter
console.log("Updated Age:", student.age);

// Setter rejects this value
student.age = -5;