class BankAccount {
    #balance; // Private property

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Insufficient funds or invalid amount');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Usage
const myAccount = new BankAccount('Alice', 11000);
myAccount.deposit(500); // Deposited $500. New balance: $1500
myAccount.withdraw(2000); // Withdrew $200. New balance: $1300
console.log(myAccount.getBalance()); // 1300
