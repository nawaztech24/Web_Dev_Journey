// Parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("My name is " + this.name + " and I am " + this.age + " years old.");
    }
}

// Child class inherits from Person
class Student extends Person {
    constructor(name, age, course) {
        // Calls the parent class constructor
        super(name, age);

        this.course = course;
    }

    study() {
        console.log(this.name + " is studying " + this.course);
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}

// Creating objects
const student1 = new Student("Nawaz", 23, "MCA");
const student2 = new Student("Ali", 21, "BCA");

// Inherited method from Person
student1.introduce();

// Student class methods
student1.study();
student1.showDetails();

student2.introduce();
student2.study();
student2.showDetails();