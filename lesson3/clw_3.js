// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let mass1 = [2,17,13,6,22,31,45,66,100,-18];
//     1. перебрати його циклом while
let i = 0;
while (i < mass1.length){
    console.log(mass1[i]);
    i++;
}
//     2. перебрати його циклом for
for (let zzz of mass1){
    console.log(zzz);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 1;
while (i < mass1.length){
    if (i % 2 === 1){
        console.log(mass1[i], i);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let zzz in mass1){
    if (zzz % 2 === 1){
        console.log(mass1[zzz], zzz);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < mass1.length){
    if (mass1[i] % 2 === 0){
        console.log(mass1[i], i);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let zzz of mass1){
    if (zzz % 2 === 0){
        console.log(zzz);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let zzz in mass1){
    if (mass1[zzz] % 3 === 0){
        mass1[zzz] = 'okten';
    }
}
console.log(mass1);
// 8. вивести масив в зворотньому порядку.
for (let i = mass1.length - 1; i >= 0; i--) {
    console.log(mass1[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
mass1 = [2,17,13,6,22,31,45,66,100,-18];

//     1. перебрати його циклом while
i = mass1.length - 1;
while (i !== - 1){
    console.log(mass1[i], i);
    i--;
}
//     2. перебрати його циклом for
for (let i = mass1.length - 1; i >= 0; i--) {
    console.log(mass1[i]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = mass1.length - 1;
while (i !== - 1){
    if (i % 2 === 1){
        console.log(mass1[i], i);
    }
    i--;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = mass1.length - 1; i >= 0; i--){
    if (i % 2 === 1){
        console.log(mass1[i], i);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = mass1.length - 1;
while (i !== - 1){
    if (mass1[i] % 2 === 0){
        console.log(mass1[i], i);
    }
    i--;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = mass1.length - 1; i >= 0; i--){
    if (mass1[i] % 2 === 0){
        console.log(mass1[i], i);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = mass1.length - 1; i >= 0; i--){
    if (mass1[i] % 3 === 0){
        mass1[i] = 'okten';
    }
}
console.log(mass1);