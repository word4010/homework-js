
const numbers = [1, 2, 3];
numbers[1] = 10;

console.log(numbers);



const strings = ["apple", "banana", "orange"];
strings.push("grape");

console.log(strings);


const nums = [1, 2, 3, 4, 5];
let sum = 0;

for (const num of nums) {
    sum += num;
}

console.log(sum);



const arr = [10, 20, 30, 40, 50];

for (const item of arr) {
    console.log(item);
}


const words = ["apple", "banana", "orange", "cat", "school"];

for (const word of words) {
    if (word.length > 5) {
        console.log(word);
    }
}



const numbersMax = [5, 12, 8, 20, 3, 15, 7, 1, 30, 9];
let max = numbersMax[0];

for (const number of numbersMax) {
    if (number > max) {
        max = number;
    }
}

console.log(max);


const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of evenNumbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}