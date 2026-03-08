const a = "text";
const b = "text2";

if (a && b) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}


const n1 = 5;
const n2 = 6;

if (n1 + n2 > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}


const t = "I like JavaScript";

if (t.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}


const num = 15;

if (num > 10 && num < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}


const name = "Ivan";
const email = "ivan@gmail.com";
const pass = "123456";

if (name.length >= 3 && email.includes("@") && email.includes(".") && pass.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}