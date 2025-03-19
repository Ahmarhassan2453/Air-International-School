class Car {
    startCar() {
        console.log('Car is here...');
        this.#igniteEngine();
    }

    drive() {
        console.log('Car is moving forward');
    }

    #igniteEngine() { // Private method
        console.log('location change');
    }
}

// Usage
const myCar = new Car();
myCar.startCar(); // Car is here... location change
myCar.drive();    // Car is moving forward
