// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i <= str.length; i += n) {
        arr.push(str.slice(i, i + n));
    }
    return arr;
}
let newArr = cutString('наслаждение', 3);
console.log(newArr);

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// let elist = ['someemail@gmail.com', 'someeMAIL@gmail.com', 'someeMAIL@i.ua', 'some.email@gmail.com'];

let mailVal = (mail) => {
    let dog = mail.lastIndexOf('@');
    let dot = mail.lastIndexOf('.');
    return (dog < dot && dog > 0 && mail.indexOf('@@') === -1 && dot > 2 && (mail.length - dot) > 2);
}


console.log(mailVal('someemail@gmail.com'));
console.log(mailVal('someeMAIL@gmail.com'));
console.log(mailVal('someeMAIL@i.ua'));
console.log(mailVal('some.email@gmail.com'));

//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

coursesArray = coursesArray.sort(dur = (a, b) => b.modules.length - a.modules.length);
console.log(coursesArray);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let symb = "о";
let str = "Астрономия это наука о небесных объектах";

let count = (str, stringsearch) => {
    let counter = 0;
    let ind = str.length - 1;
    while (ind !== -1) {
        ind = str.lastIndexOf(stringsearch, ind);
        if (ind > 0) {
            counter += 1;
            ind--;
        }
    }
    return counter;
}

console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str2 = "Сила тяжести приложена к центру масс тела";

let cutString2 = (str, n) => {
    str2 = str2.split(' ', n).toString().replaceAll(',', ' ')
    return str2;
}

console.log(cutString2(str2, 5));