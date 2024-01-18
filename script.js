class Wallet {
    
        //ES2022 Class fields does not use constructor
        #balance = 0;
        #transactions = [];
       // constructor() {
        //this._balance = 0; //we want to hide this balance and makes it accessible only through the deposit and withdrawal methods. we do this with the underscore(_)
        //this._transactions = []; //all transactions should be added to this array
    

    deposit(amount) {
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdrawal (amount) {
        this.#processWithdraw(amount)
        if (amount > this.#balance) {
            console.log("not enough funds")
            return;
        }
        this.#balance -= amount;
    }
    //we want all deposits to be processed in transactions
    //private method not accessible to the users
    #processDeposit(amount) {
        console.log(`depositing ${amount}`)

        this.#transactions.push({
            type: 'deposit',
            amount
        })
    }
    //we want all withdrawals to be processed in transactions
    #processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`)

        this.#transactions.push({
            type: 'withdraw',
            amount
        })
    }

    //Getter is used to do this
    get balance() { //we are using this function to prevent access to the private property
        return this.#balance
    }

    get transactions() {
        return this.#transactions
    }
}

const wallet = new Wallet();
// wallet.deposit(300);
// wallet.withdrawal(350);

// console.log(wallet.balance)
// console.log(wallet.transactions)
wallet.deposit(300)
wallet.withdrawal(100)
console.log(wallet.balance)