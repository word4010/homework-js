// 1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i + 1 + " - " + array[i]);
    }
}

// 2
function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
}

// 3
function findLongestWord(string) {
    let words = string.split(" ");
    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// 4
function formatString(string) {
    if (string.length > 40) {
        return string.slice(0, 40) + "...";
    }
    return string;
}

// 5
function checkForSpam(message) {
    message = message.toLowerCase();
    return message.includes("spam") || message.includes("sale");
}

// 6
let input;
const numbers = [];
let total = 0;

while ((input = prompt("Введіть число")) !== null) {
    numbers.push(Number(input));
}

for (let number of numbers) {
    total += number;
}

console.log("Загальна сума чисел дорівнює " + total);

// 7
const logins = ["Mango", "Ajax", "Poly"];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return "Помилка! Логін повинен бути від 4 до 16 символів";
    }

    if (!isLoginUnique(allLogins, login)) {
        return "Такий логін уже використовується!";
    }

    allLogins.push(login);
    return "Логін успішно доданий!";
}