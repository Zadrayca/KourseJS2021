// - Дано натуральное число n. Выведите все числа от 1 до n.
let n = 11;
for (let i = 1; i <= n; i++) {
    console.log(i);
}
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let a = 8;
let b = 16;
if (a < b) {
    for (a; a <= b; a++) {
        console.log(a);
    }
} else if (a > b) {
    for (a; a >= b; a--) {
        console.log(a);
    }
}
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let mass1 = [];
for (let i = 0; i < 10; i++) {
    mass1[i] = Math.floor(Math.random() * (100 - (-100)) + (-100));
}
console.log(mass1); // -- вывод массива чисел для проверки
let i = 3;
let plusI = (mass, num) => {
    [mass[num], mass[num + 1]] = [mass[num + 1], mass[num]];
    console.log(mass1);
}

plusI(mass1, i);
// Другой вариант
let plusI2 = (mass, num) => {
    mass[num] = [mass[num + 1], mass[num + 1] = mass[num]][0];
    console.log(mass1);
}

plusI2(mass1, i);
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]  [1, 0, 223, 12, 0, 0, 32, 55, 0, 3, 0, 0, 5];
// mass = mass.filter(massa => massa !==0);

let mass2 = [3, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4];
console.log(mass2); // -- вывод массива чисел для проверки
let len = mass2.length

let segregator = (mass, l) => {
    l--;
    for (let item = 0; item < mass.length - 1; item++) {
        if (mass[item] === 0) {
            [mass[item], mass[item + 1]] = [mass[item + 1], mass[item]];
        }
    }
    if (l > 0) {
        segregator(mass, l);
    }
}

segregator(mass2, len);
console.log(mass2);

// Другое решение ----------------------------------------------------------------------------------------------
mass3 = [3, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4];
console.log(mass3); // -- вывод массива чисел для проверки

let segregator2 = (mass) => {
    let len1 = mass.length;
    mass = mass.filter(massa => massa !== 0);
    let len2 = len1 - mass.length;
    for (let i = 0; i < len2; i++) {
        mass.push(0);
    }
    return mass;
}
mass3 = segregator2(mass3);
console.log(mass3);

// Другое решение ----------------------------------------------------------------------------------------------

mass4 = [3, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4];
console.log(mass4); // -- вывод массива чисел для проверки

let compare = (a, b) => {
    if (a > 0 && b > 0) return 0;
    if (a > 0 && b === 0) return -1;
}

mass4.sort(compare);
console.log(mass4);