// Parent Object
const person = {

    // Property
    name: "Nawaz",

    // Method
    greet() {
        // 'this' refers to the object calling this method
        return "Hello " + this.name;
    }
};

// Child Object
const student = {

    // Own Property
    course: "MCA"
};

// Setting Prototype
// If student doesn't have a property/method,
// JavaScript will look inside person
student.__proto__ = person;

// Own property found in student object
console.log(student.course);

// name is not present in student
// JavaScript looks in prototype (person)
console.log(student.name);

// greet() is not present in student
// JavaScript finds it in prototype (person)
console.log(student.greet());

