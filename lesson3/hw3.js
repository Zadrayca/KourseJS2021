// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let q = [1, 2, 3, 4, 5];
let w = ['qwe', 'asd', 'zxc', 'qw', 'as'];
let e = ['qwe', 'asd', 123, 234, true, false];
console.log(q, w, e);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let a = [];
a[0] = 'qwe';
a[1] = 111;
a[2] = true;
console.log(a);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++){
    document.write('<div>qwerty</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div>qwerty ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let r = 0;
while (r < 20){
    document.write(`<h1>asdfg</h1>`);
    r++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let t = 0;
while (t < 20){
    document.write(`<h1>asdfg ${t}</h1>`);
    t++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let resours = [];
let z = 0;
for (let i = 0; i < 10; i++) {
    z = Math.floor(Math.random() * 100);
    resours[i] = z;
}
for (let zzz of resours){
    console.log(zzz);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let resours2 = [];
for (let i = 0; i < 10; i++) {
    resours2[i] = 'qwertyy' + i;
}
for (let zzz of resours2){
    console.log(zzz);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let resours3 = [1, 'sdfsdfsc', 3335, true, 'xcvcx', 222, 765, 'bvcvbf', false, 334];
for (let zzz of resours3){
    console.log(zzz);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let zzz of resours3){
    if (typeof(zzz) === "boolean"){
        console.log(zzz);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let zzz of resours3){
    if (typeof(zzz) === "number"){
        console.log(zzz);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let zzz of resours3){
    if (typeof(zzz) === "string"){
        console.log(zzz);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let resours4 = [];
resours4[0] = 123;
resours4[1] = 321;
resours4[2] = '123';
resours4[3] = 'cvb';
resours4[4] = true;
resours4[5] = false;
resours4[6] = 'bgt';
resours4[7] = 223;
resours4[8] = '74rty';
resours4[9] = 123;
for (let zzz of resours4){
    console.log(zzz);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (Number.isInteger(i / 2)) {
        console.log(i);
        document.write(i);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(i);
    }
}