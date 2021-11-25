// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let normal = (str) => str.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
console.log(normal(n1));
console.log(normal(n2));
console.log(normal(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomArr = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}
console.log(randomArr());
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr1 = randomArr();
let min = (a, b) => a - b;
console.log(arr1.sort(min)); // От меньшего к большему

arr1 = randomArr();
console.log(arr1.sort(min1 = (a, b) => a - b));  // От меньшего к большему

let max = (a, b) => b - a;
arr1 = randomArr();
console.log(arr1.sort(max));  // От большего к меньшему

arr1 = randomArr();
console.log(arr1 = arr1.sort(min1 = (a, b) => b - a));  // От большего к меньшему

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arr2 = randomArr();
console.log(arr2);
let para = (a) => a % 2 === 0;
console.log(arr2.filter(para));  // Парные

arr2 = randomArr();
console.log(arr2.filter((a) => a % 2 === 0));  // Парные

arr2 = randomArr();
let nePara = (a) => a % 2;
console.log(arr2.filter(nePara));  // Не парные

arr2 = randomArr();
console.log(arr2.filter((a) => a % 2));  // Не парные

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr3 = randomArr();
let tostr = (a) => a.toString();
console.log(arr3.map(tostr));
//------------------------------------------- второй вариант
arr3 = randomArr();
console.log(arr3.map((a) => a.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let arr4 = randomArr();
let sortNums = (arr, direction) => {
    if (direction === '-') {
        return arr.sort(min = (a, b) => a - b);
    } else if (direction === '+') {
        return arr.sort(max = (a, b) => b - a);
    } else {
        return 'Error';
    }
}
console.log(sortNums(arr4, '-'));  // От меньшего к большему

console.log(sortNums(arr4, '+'));  // От большего к меньшему

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray = coursesAndDurationArray.sort(dur = (a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

coursesAndDurationArray = coursesAndDurationArray.filter(five = (a) => a.monthDuration > 5);
console.log(coursesAndDurationArray);

//------------------------------------------------------------------- второй вариант
coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray = coursesAndDurationArray.sort(dur = (a, b) => b.monthDuration - a.monthDuration).filter(five = (a) => a.monthDuration > 5);
console.log(coursesAndDurationArray);