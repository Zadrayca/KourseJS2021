// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let mass1 = [];
let count = 0;
for (let i = 1; i < 101; i++){
    if (i % 2 === 0){
        mass1[count] = i;
        count++;
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
let mass2 = [];
let count2 = 0;
for (let i = 1; i < 101; i++){
    if (i % 2 === 1){
        mass2[count2] = i;
        count2++;
    }
    // console.log(mass2)
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let mass3 = [];
for (let i = 0; i < 20; i++) {
    mass3[i] = Math.floor(Math.random() * 100);
}
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let mass4 = [];
for (let i = 0; i < 20; i++){
    mass4[i] = Math.floor(Math.random() * (8 - 732) + 732);
}
console.log(mass4)
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < 20; i+=3){
    console.log(mass4[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < 20; i+=3){
    if (mass4[i] % 2 === 0){
        console.log(mass4[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let mass5 = [];
let count3 = 0;
for (let i = 2; i < 20; i+=3){
    if (mass4[i] % 2 === 0){
        console.log(mass4[i]);
        mass5[count3] = mass4[i];
        count3++;
    }
}
// console.log(mass5)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < 20; i++){
    if (mass4[i] % 2 === 0){
        console.log(mass4[i - 1]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let xxx = 0;
let mass6 = [100,250,50,168,120,345,188];
for (let zzz of mass6){
    xxx += zzz;
}
console.log(xxx / mass6.length);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let mass7 = [];
let mass8 = [];
for (let i = 0; i < 20; i++) {
    mass7[i] = Math.floor(Math.random() * 100);
    mass8[i] = mass7[i] * 5;
}
// console.log(mass7, mass8)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mass9 = [1, 'sdfsdfsc', 3335, true, 'xcvcx', 222, 765, 'bvcvbf', false, 334];
let mass10 = [];
let count4 = 0;
for (let zzz of mass9){
    if (typeof(zzz) === "number"){
        mass10[count4] = zzz;
        count4++;
    }
}
// console.log(mass10)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let newUser;
for (let zzz of usersWithId){
    for (let ccc of citiesWithId){
        newUser = zzz;
        if (zzz.id === ccc.user_id){
            newUser.adress = ccc;
        }
    }
}
console.log(newUser);
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let mass11 = [];
for (let i = 0; i < 10; i++) {
    mass11[i] = Math.floor(Math.random() * 100);
}
for (let zzz of mass11){
    if (zzz % 2 === 0){
        console.log(zzz);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let mass12 = [];
for (let zzz in mass11) {
    mass12[zzz] = mass11[zzz];
}
console.log(mass12);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let mass13 = [ 'a', 'b', 'c'];
let nnn = '';
for(let i = 0; i < mass13.length; i++){
    nnn += mass13[i];
}
console.log(nnn);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
let bbb = '';
while (i < mass13.length){
    bbb += mass13[i];
    i++;
}
console.log(bbb);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let vvv = '';
for(let zzz of mass13){
    vvv += zzz;
}
console.log(vvv);