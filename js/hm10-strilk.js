// 1

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition) {
    let count = 0;

    for (const item of array) {
        if (condition(item)) {
            count++;
        }
    }

    return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log(countItems(numbers, isEven));
console.log(countItems(numbers, isLarge));
console.log(countItems(words, isShort));


// 2

const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Помилка" : a / b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));


// 3

function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
        console.log(messageCreator(i));
    }
}

repeatMessage(3, i => "Привіт " + i);
repeatMessage(2, i => "Повідомлення " + i);