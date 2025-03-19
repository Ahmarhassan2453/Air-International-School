class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows`);
    }
}

// Usage
const dog = new Dog('German');
const cat = new Cat('Russian');

dog.makeSound(); // German
cat.makeSound(); // Russian
