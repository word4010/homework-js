// Завдання 1

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(key + ": " + user[key]);
}


// Завдання 2

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user));


// Завдання 3

function findBestEmployee(employees) {
    let bestName = "";
    let maxTasks = 0;

    for (const name in employees) {
        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
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


// Завдання 4

function countTotalSalary(employees) {
    let total = 0;

    for (const name in employees) {
        total += employees[name];
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


// Завдання 5

function getAllPropValues(arr, prop) {
    const result = [];

    for (const item of arr) {
        result.push(item[prop]);
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


// Завдання 6

function calculateTotalPrice(allProducts, productName) {
    let total = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            total = product.price * product.quantity;
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