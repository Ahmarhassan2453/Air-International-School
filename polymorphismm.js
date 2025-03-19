
class Shape {
     constructor(name) {
          this.name = name;
     }

calculateArea() {
console.log('Area calculation not defined for this shape.');
    }

    display() {
         console.log(`This is a ${this.name}.`);
    }
}

 class Circle extends Shape {
     constructor(radius) {
        super('Circle');
          this.radius = radius;
     }


    calculateArea() {
            const area = Math.PI * this.radius * this.radius;
        console.log(`The area of the circle is: ${area.toFixed(2)}`);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
super('Rectangle');
  this.width = width;
 this.height = height;
    }

   
    calculateArea() {
        const area = this.width * this.height;
        console.log(`The area of the rectangle is: ${area}`);
    }
}


class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        const area = 0.5 * this.base * this.height;
        console.log(`The area of the triangle is: ${area}`);
    }
}

function printArea(shape) {
    shape.display();
    shape.calculateArea();
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
const triangle = new Triangle(8, 4);


printArea(circle);
printArea(rectangle);
printArea(triangle);
