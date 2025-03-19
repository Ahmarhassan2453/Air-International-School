
class Vehicle {
 constructor(brand) {
this.brand = brand;
    }

start() {
 console.log(`${this.brand} vehicle is starting.`);
    }
}


class Car extends Vehicle {
constructor(brand, model) {
        super(brand); 
  this.model = model;
    }

drive() {
 console.log(`${this.brand} ${this.model} is driving.`);
    }
}

class ElectricCar extends Car {
 constructor(brand, model, batteryRange) {
     super(brand, model); 
     this.batteryRange = batteryRange;
    }

charge() {
 console.log(`${this.brand} ${this.model} is charging. Range: ${this.batteryRange} miles.`);
    }


}

const myTesla = new ElectricCar('Tesla', 'Model S', 370);


myTesla.start();   
myTesla.drive();  
myTesla.charge(); 
