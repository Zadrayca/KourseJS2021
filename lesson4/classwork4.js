// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minimal(a, b, c) {
    if (a < b && a < c) {
        console.log(a + ': найменьше');
    } else if (b < a && b < c) {
        console.log(b + ': найменьше');
    } else if (c < a && c < b) {
        console.log(c + ': найменьше');
    }
}

minimal(15, 8, 23);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maximal(a, b, c) {
    if (a > b && a > c) {
        console.log(a + ': найбільше');
    } else if (b > a && b > c) {
        console.log(b + ': найбільше');
    } else if (c > a && c > b) {
        console.log(c + ': найбільше');
    }
}

maximal(15, 8, 23);

// - створити функцію яка повертає найбільше число з масиву
let mass1 = [];
for (let i = 0; i < 10; i++) {
    mass1[i] = Math.floor(Math.random() * (100 - (-100)) + (-100));
}
console.log(mass1); // -- вывод массива чисел для проверки

function rMax(mass) {
    let max = mass[0];
    for (let item of mass) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}

console.log(rMax(mass1) + ': найбільше');

// - створити функцію яка повертає найменьше число з масиву
function rMin(mass) {
    let min = mass[0];
    for (let item of mass) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}

console.log(rMin(mass1) + ': найменьше');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function summ(mass) {
    let smm = 0;
    for (let item of mass) {
        smm += item;
    }
    return smm;
}

console.log(summ(mass1) + ': сумма чисел');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function average(mass) {
    let ave = 0;
    for (let item of mass) {
        ave += item;
    }
    return ave / mass.length;
}

console.log(average(mass1) + ': середнє арифметичне');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function manyNums() {
    let box = arguments[0];
    let max = box[0];
    let min = box[0];
    for (let item of box) {
        if (item > max) {
            max = item;
        }
        if (item < min) {
            min = item;
        }
    }
    console.log(max + ': найбільше');
    return min;
}

console.log(manyNums(mass1) + ': найменьше');
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let mass5 = [];

function massiv(mass) {
    for (let i = 0; i < 15; i++) {
        mass[i] = Math.floor(Math.random() * (100 - (-100)) + (-100));
    }
    return mass;
}

console.log(massiv(mass5));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let mass6 = [];

function massiv2(mass, limit) {
    for (let i = 0; i < 15; i++) {
        mass[i] = Math.floor(Math.random() * limit);
    }
    return mass;
}

console.log(massiv2(mass6, 180));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let mass7 = [];
for (let i = 0; i < 10; i++) {
    mass7[i] = Math.floor(Math.random() * (100 - (-100)) + (-100));
}
console.log(mass7); // -- вывод массива чисел для проверки
function revers(mass) {
    let newMass = []
    for (let i = mass.length - 1; i >= 0; i--) {
        newMass.push(mass[i]);
    }
    return newMass;
}

x = revers(mass7);
console.log(x + ': новий масив в зворотньому порядку');