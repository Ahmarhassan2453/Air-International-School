
class Appliance {
    constructor(brand) {
 if (this.constructor === Appliance) {
    throw new Error("Abstract classes can't be instantiated.");
    }
this.brand = brand;
    }
  
    turnOn() {
        throw new Error("Method 'turnOn()' must be implemented.");
    }
    turnOff() {
        throw new Error("Method 'turnOff()' must be implemented.");
    }
}


class WashingMachine extends Appliance {
    turnOn() {
console.log(`${this.brand} Washing Machine is now ON.`);
    }

 turnOff() {
       console.log(`${this.brand} Washing Machine is now OFF.`);
    }
}

class Refrigerator extends Appliance {
    turnOn() {
 console.log(`${this.brand} Refrigerator is now cooling.`);
    }

 turnOff() {
    console.log(`${this.brand} Refrigerator is now off.`);
    }
}

const myWasher = new WashingMachine('LG');
 myWasher.turnOn();
  myWasher.turnOff();

const myFridge = new Refrigerator('Samsung');
myFridge.turnOn();
myFridge.turnOff();

 try {
    const myAppliance = new Appliance('Generic');
} catch (error) {
console.log(error.message);
}
