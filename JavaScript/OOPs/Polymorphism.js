// Parent class
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

// Child class
class Dog extends Animal {
    sound() {
        console.log("Dog says Woof");
    }
}

// Child class
class Cat extends Animal {
    sound() {
        console.log("Cat says Meow");
    }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.sound();
dog.sound();
cat.sound();