//1

let i = 1;

while (i <= 10) {
    console.log(i);

    i = i + 1;
}


//2

for (let i = 2; i <= 20; i = i + 1) {
    if (i % 2 !== 0) continue;

    console.log(i);
}


//3

for (let i = 1; i <= 10; i = i + 1) {
    console.log(7 * i);
}


//4

let n = 8;

for (let i = 1; i <= 20; i = i + 1) {
    if (i >= n) break;

    console.log(i);
}


//5

let j = 1;

while (j <= 20) {

    if (j % 3 === 0) {
        j = j + 1;
        continue;
    }

    console.log(j);

    j = j + 1;
}