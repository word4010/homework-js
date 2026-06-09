// 1

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i++) {
    string += friends[i];

    if (i < friends.length - 1) {
        string += ',';
    }
}

console.log(string);


const stringJoin = friends.join(',');
console.log(stringJoin);

// 2. 

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

// 3. 

const cardToRemove = 'Карточка-3';
const removeIndex = cards.indexOf(cardToRemove);

cards.splice(removeIndex, 1);

console.log(cards);

// 4

const cardToInsert = 'Карточка-6';

cards.splice(cards.length, 0, cardToInsert);

console.log(cards);

// 5

const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);

cards.splice(updateIndex, 1, 'Оновлена-Карточка-4');

console.log(cards);