//  1

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}



function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user));



function findBestEmployee(employees) {
    let bestName = "";
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestName = name;
        }
    }

    return bestName;
}

console.log(
    findBestEmployee({
        Ann: 29,
        David: 35,
        Helen: 1,
        Lorence: 99,
    })
);



function countTotalSalary(employees) {
    let total = 0;

    for (const [, salary] of Object.entries(employees)) {
        total += salary;
    }

    return total;
}

console.log(
    countTotalSalary({
        Mango: 100,
        Poly: 150,
        Ajax: 200,
    })
);



function getAllPropValues(arr, prop) {
    const result = [];

    for (const item of arr) {
        const { [prop]: value } = item;
        result.push(value);
    }

    return result;
}

const products = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 50 },
    { name: "Orange", price: 80 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));



function calculateTotalPrice(allProducts, productName) {
    let total = 0;

    for (const product of allProducts) {
        const { name, price, quantity } = product;

        if (name === productName) {
            total = price * quantity;
        }
    }

    return total;
}

const allProducts = [
    { name: "Apple", price: 100, quantity: 5 },
    { name: "Banana", price: 50, quantity: 10 },
    { name: "Orange", price: 80, quantity: 3 },
];

console.log(calculateTotalPrice(allProducts, "Apple"));
console.log(calculateTotalPrice(allProducts, "Banana"));

//2


const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

const account = {
    balance: 0,
    transactions: [],
    lastId: 0,

    createTransaction(amount, type) {
        return {
            id: ++this.lastId,
            type,
            amount,
        };
    },

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(
            this.createTransaction(amount, Transaction.DEPOSIT)
        );
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів!");
            return;
        }

        this.balance -= amount;
        this.transactions.push(
            this.createTransaction(amount, Transaction.WITHDRAW)
        );
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        return this.transactions.find((t) => t.id === id) || null;
    },

    getTransactionTotal(type) {
        let total = 0;

        for (const t of this.transactions) {
            if (t.type === type) {
                total += t.amount;
            }
        }

        return total;
    },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(2000);

console.log("Баланс:", account.getBalance());
console.log("Транзакція №2:", account.getTransactionDetails(2));
console.log("Поповнення:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("Зняття:", account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.transactions);