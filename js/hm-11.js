// 1. Bank Account

const bankAccount = {
    ownerName: "Микола",
    accountNumber: "123456789",
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
        alert(`Рахунок поповнено. Залишок: ${this.balance} грн`);
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            alert(`Готівку отримано. Залишок: ${this.balance} грн`);
        } else {
            alert("Недостатньо коштів!");
        }
    },
};

if (confirm("Натисніть OK щоб поповнити рахунок, Скасувати щоб зняти гроші")) {
    const amount = Number(prompt("Введіть суму поповнення"));
    bankAccount.deposit(amount);
} else {
    const amount = Number(prompt("Введіть суму для зняття"));
    bankAccount.withdraw(amount);
}


// 2. Weather

const weather = {
    temperature: Number(prompt("Введіть температуру")),

    isFreezing() {
        return this.temperature < 0;
    },
};

if (weather.isFreezing()) {
    alert("Температура нижче 0 градусів Цельсія");
} else {
    alert("Температура вище або дорівнює 0 градусів Цельсія");
}


// 3. User

const user = {
    name: "Микола",
    email: "test@gmail.com",
    password: "12345",

    login(inputEmail, inputPassword) {
        return (
            inputEmail === this.email &&
            inputPassword === this.password
        );
    },
};

const email = prompt("Введіть email");
const password = prompt("Введіть пароль");

if (user.login(email, password)) {
    alert("Вхід успішний");
} else {
    alert("Неправильний email або пароль");
}


// 4. Movie

const movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,

    isTopRated() {
        return this.rating > 8;
    },
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);

console.log(movie.isTopRated());