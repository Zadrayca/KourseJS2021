// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let len = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let item of len) {
    console.log(item.length);
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

for (let item of len) {
    console.log(item.toUpperCase());
}
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let len2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let item of len2) {
    console.log(item.toLowerCase());
}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';// ['Каждый', 'охотник', 'желает', 'знать']

let str2 = 'Каждый охотник желает знать';
let stringToarray = (string) => string.split(' ');
let arr = stringToarray(str2);
console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.substring(0, length);
console.log(delete_characters(str2, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str3 = "HTML JavaScript PHP";
let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();
console.log(insert_dash(str3));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str5 = 'hello world';
let firstUP = (str) => str[0].toUpperCase() + str.slice(1);
console.log(firstUP(str5));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str6 = 'hello world lorem ipsum javascript is cool';
let capitalize = (str) => {
    let newStr = '';
    for (let item of str.split(' ')) {
        newStr += item[0].toUpperCase() + item.slice(1) + ' ';
    }
    return newStr.slice(0, -1);
}
console.log(capitalize(str6));