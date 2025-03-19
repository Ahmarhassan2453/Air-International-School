// User class
class User {
    #password; // Private property

    constructor(username, password) {
        this.username = username;
        this.#password = password; // Correct assignment
    }

    validatePassword(inputPassword) {
        return this.#password === inputPassword;
    }

    getUsername() {
        return this.username;
    }
}

// BankAccount class
class BankAccount {
    #balance; // Private property

    constructor(accountNumber, user, balance) {
        this.accountNumber = accountNumber;
        this.user = user; // Instance of User class
        this.#balance = balance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit successful! New balance: $${this.#balance}`);
        } else {
            console.log('Invalid deposit amount.');
        }
    }

    // Method to withdraw money
    withdraw(amount, password) {
        if (!this.user.validatePassword(password)) {
            console.log('Incorrect password. Withdrawal failed.');
            return;
        }

        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawal successful! Remaining balance: $${this.#balance}`);
        } else {
            console.log('Insufficient balance or invalid amount.');
        }
    }

    // Method to check balance
    getBalance(password) {
        if (!this.user.validatePassword(password)) {
            console.log('Incorrect password. Access denied.');
            return;
        }

        console.log(`Current balance: $${this.#balance}`);
    }
}

// Creating a User and BankAccount instance
const user1 = new User('Ali', 'secret123');
const account1 = new BankAccount('123456789', user1, 1000);

// Accessing methods with password validation
account1.deposit(500);                // Deposit successful! New balance: $1500
account1.withdraw(200, 'wrongPass');   // Incorrect password. Withdrawal failed.
account1.withdraw(200, 'secret123');   // Withdrawal successful! Remaining balance: $1300
account1.getBalance('wrongPass');      // Incorrect password. Access denied.
account1.getBalance('secret123');      // Current balance: $1300
