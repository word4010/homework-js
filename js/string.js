const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = "mymail@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

const a = "My";
const b = "name";
const c = "is";

let fullName = a + " " + b + " " + c;
fullName = fullName + " Viktor";

console.log(fullName);

const userName = "Олександро";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

const nameSurname = "Іван Петренко";
console.log(nameSurname.indexOf(" "));

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

console.log(string1.toLowerCase().includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));
console.log(string3.toLowerCase().includes(blacklistedWord1));

const fruit = "апельсин";
console.log(fruit[fruit.length - 1]);