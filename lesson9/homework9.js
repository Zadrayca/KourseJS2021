// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'blue';
block.style.color = 'red';
block.style.fontSize = '25px';
block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nobis!';
document.body.appendChild(block);

let block2 = block.cloneNode(true);
document.body.appendChild(block2);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName('menu')[0];
arr.forEach(item=> {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
})

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

coursesAndDurationArray.forEach(item => {
    let newDiv = document.createElement('div');
    let text = '';
    for (let key in item) {
        text += `--${key}: ${item[key]}`
        console.log(text);
    }
    console.log(text);
    newDiv.innerText = text.slice(2);
    document.body.appendChild(newDiv);
})



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.

coursesAndDurationArray.forEach(value => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    newDiv.append(h1, p);
    document.body.appendChild(newDiv);
})