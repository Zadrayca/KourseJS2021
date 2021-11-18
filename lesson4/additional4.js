//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function sum1(arg1, arg2) {
    if (arg1 !== undefined && arg2 === undefined) {
        console.log(arg1 + ': приймає один аргумент');
    } else if (arg1 !== undefined && arg2 !== undefined) {
        console.log(arg1 + arg2 + ': складає або конкатенує їх між собою');
    } else if (arg1 === undefined && arg2 === undefined) {
        console.log('error');
    }
}

sum1(1);
sum1(2, 5);
sum1('asd', 1233);
sum1();
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
let mass1 = [];
let mass2 = [];

function massiv(mass) {
    for (let i = 0; i < 10; i++) {
        mass[i] = Math.floor(Math.random() * (100 - (-100)) + (-100));
    }
    return mass;
}

mass1 = massiv(mass1);
mass2 = massiv(mass2);

console.log(mass1, mass2);  // -- вывод массива чисел для проверки
function summMassiv(mas1, mas2) {
    let newMass = [];
    for (let i = 0; i < mas1.length; i++) {
        newMass.push(mas1[i] + mas2[i]);
    }
    return newMass;
}

let mass3 = summMassiv(mass1, mass2);
console.log(mass3 + ': новий результуючий масив');

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {user_id: 3, country: 'USA', city: 'Portland'},
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];

function massKey(mass) {
    let keys = [];
    for (let item of mass) {
        for (let key in item) {
            keys.push(key);
        }
    }
    return keys;
}

let mass4 = massKey(usersWithId);
console.log(mass4);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function massItem(mass) {
    let keys = [];
    for (let item of mass) {
        for (let key in item) {
            keys.push(item[key]);
        }
    }
    return keys;
}

let mass5 = massItem(usersWithId);
console.log(mass5);