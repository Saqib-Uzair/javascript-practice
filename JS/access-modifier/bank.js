// Bank system

class BankAccount {
    #balance = 100;
    
    constructor(amount){
        this.amount = amount;
    }

    deposit(amount) {
        this.#balance += this.amount;
        console.log(this.#balance);
    }

    withdraw(amount) {
        this.#balance -= this.amount;
        console.log(this.amount);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
// account.deposit(200);
