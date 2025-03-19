// class Person{

    

//     constructor(name, age)
// {
//     this.name = name;
//     this.age=age
// }

//  personName(){

//     console.log(`My name is  : ${this.age}`);


// }

// personAge(){
//     console.log(`My Age is  : ${this.name}`)
// }

// }



// const person1 = new Person("Usman", 24);
// const person2 = new Person("Ahmer", 25);

// person1.personName();
// person1.personAge();

// person2.personName();
// person2.personAge();



// class Car{

//     name
//     model
//     color
//     engine
//     tyre
//     dors
    
//     constructor(name, model, color, engine, tyre,dors){
//         this.name = name;
//         this.model= model;
//         this.color= color;
//         this.engine= engine;
//         this.tyre= tyre;
//         this.dors= dors;
//     }
    
//     carDetail(){
//         console.log(`car name : ${this.name} \ncar model : ${this.model} \n car color : ${this.color} \n car engine :${this.engine}
//              \n car tyre :${this.tyre} \ncar dors : ${this.dors}`)
//     }
    
    
    
//     }
    
    
//     const car1 = new Car("Suzuki Swift", 2025, "White", "Shine", "Good", "Silver");
//     const car2 = new Car("Honda Civic", 2024, "Gray", "Black", "White", "Gray");
    
    
//     car1.carDetail();
//     car2.carDetail();  


// class Home { 
//     name;
//     washroom;
//     kitchen;
//     launch;
//     garden;

//     constructor(name, washroom, kitchen, launch, garden) {
//         this.name = name;
//         this.washroom = washroom;
//         this.kitchen = kitchen;
//         this.launch = launch;
//         this.garden = garden;
//     }

//     homeDetail() {
//         console.log(`Home name: ${this.name} \nHome washroom: ${this.washroom} \nHome kitchen: ${this.kitchen} \nHome launch: ${this.launch} \nHome garden: ${this.garden}`);
//     }
// }


// const myHome = new Home(741, "Four", "One", "None", 1);


// myHome.homeDetail();






// class Manu{
//     pizza;
//     size;
    

//     constructor(pizza, size ){
//         this.pizza=pizza;
//         this.size=size;
//     }
// }

// class Customer extends Manu{

//     constructor( pizza, size, name, phone){
//         super(pizza, size);

//         this.name= name;
//         this.phone = phone;

//     }

//     placeOrder(){
//         console.log(`Manu pizza : ${this.pizza}\n Manu size :${this.size} \n Manu name :${this.name} \nManu phone:${this.phone} `)
//     }
     

// }
// const myManu = new Customer("Fajita","Large","Ahmar",8888);
// myManu.placeOrder();


// class Shopping{
//     brand;
//     color;

//     constructor(brand,color){
//         this.brand=brand;
//         this.color=color;
//     }
// }
// class PaymentMehod extends Shopping{
//     constructor(brand,color,online){
//     super(brand,color);

//     this.online=online;
//     }

//     placeOrder(){
//         console.log(`Shopping brand:${this.brand}\n Shopping color:${this.color}\n Shopping online:${this.online}`)
//     }
// }
// const myShopping = new Shopping("Outfit","White");
//  myShopping.placeOrder();


// class Principal{
//     name;

//     constructor(name){
//         this.name=name;
//     }
// }
// class Staff extends Principal{
//     constructor(name, strength){
//         super(name);

//         this.strength=strength;
//     }
// }
// class Student extends Staff{
//     constructor(name,strength,age){
//     super(name,strength);
//     this.age=age;
//     }
//     placeOrder(){
//         console.log(`Principal name:${this.name}\nPrincipal strength:${this.strength}\nPrincipal age:${this.age}`);

//     }
// }
// const myStudent = new Student("Ahmar Hassan",500,26);
// myStudent.placeOrder();





// (function() {
// class User {
//     #username;
//     #password;

//     constructor(username, password) {
//         this.#username = username;
//         this.#password = password;
//     }

//     getUsername() {
//         return this.#username;
//     }

//     checkPassword(inputPassword) {
//         return this.#password === inputPassword;
//     }
// }


// class BankAccount {
//     #accountNumber;
//     #balance;

//     constructor(accountNumber, balance = 0) {
//         this.#accountNumber = accountNumber;
//         this.#balance = balance;
//     }

//     getAccountNumber() {
//         return this.#accountNumber;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited: $${amount}`);
//         } else {
//             console.log('Invalid deposit amount');
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrew: $${amount}`);
//         } else {
//             console.log('Invalid withdrawal amount or insufficient balance');
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }


// const user = new User('john_doe', '12345');
// console.log(user.getUsername()); 
// console.log(user.checkPassword('12345'));

// const account = new BankAccount('1234567890', 1000);
// console.log(account.getAccountNumber()); 
// account.deposit(500);
// console.log(account.getBalance()); 
// account.withdraw(200);
// console.log(account.getBalance()); 
// })();



          
