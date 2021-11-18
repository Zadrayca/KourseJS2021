// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    return a * b;
}

console.log(areaRectangle(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    return 3.14 * (r ** 2);
}

console.log(areaCircle(8));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
    return 2 * 3.14 * r * (h + r);
}

console.log(areaCylinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let mass1 = [];
for (let i = 0; i < 10; i++) {
    mass1[i] = Math.floor(Math.random() * 100);
}

function logger(mass) {
    for (let item of mass) {
        console.log(item);
    }
}

logger(mass1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores recusandae rerum! Alias eveniet impedit nihil quasi quos rerum sint.'

function parag(txt) {
    document.write(`<p>${txt}</p>`);
}

parag(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(txt) {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);
}

list(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(txt, nums) {
    document.write(`<ul>`);
    for (let i = 0; i < nums; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}

list2(text, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass3 = [1, 'sdfsdfsc', 3335, true, 'xcvcx', 222, 765, 'bvcvbf', false, 334];

function list3(mass) {
    document.write(`<ul>`);
    for (let item of mass) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

list3(mass3);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];

function userList(mass) {
    for (let item of mass) {
        document.write(`<ul>`);
        console.log(item);
        for (let item2 in item) {
            console.log(item2);
            document.write(`<li>${item2 + ': ' + item[item2]}</li>`);
        }
        document.write(`</ul>`);
    }
}

userList(users);