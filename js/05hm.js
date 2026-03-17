
const drink = "Кава";

switch (drink) {
    case "Кава":
        console.log("Ви обрали каву");
        break;
    case "Чай":
        console.log("Ви обрали чай");
        break;
    case "Сік":
        console.log("Ви обрали сік");
        break;
    default:
        console.log("Невідомий напій");
}


const day = "понеділок";

if (
    day === "понеділок" ||
    day === "вівторок" ||
    day === "середа" ||
    day === "четвер" ||
    day === "п'ятниця"
) {
    console.log("Це робочий день");
} else if (day === "субота" || day === "неділя") {
    console.log("Це вихідний");
} else {
    console.log("Невідомий день");
}


const month = 3;

if (month === 12 || month === 1 || month === 2) {
    console.log("Зима");
} else if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Літо");
} else if (month >= 9 && month <= 11) {
    console.log("Осінь");
} else {
    console.log("Невірний місяць");
}


const color = "червоний";

if (color === "червоний") {
    console.log("стоп");
} else if (color === "зелений") {
    console.log("йти");
} else if (color === "жовтий") {
    console.log("чекати");
} else {
    console.log("Невідомий колір");
}



const num1 = 10;
const num2 = 5;
const operator = "/";

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(result);
        break;
    case "-":
        result = num1 - num2;
        console.log(result);
        break;
    case "*":
        result = num1 * num2;
        console.log(result);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Ділити на нуль не можна!");
        } else {
            result = num1 / num2;
            console.log(result);
        }
        break;
    default:
        console.log("Невідома операція");
}