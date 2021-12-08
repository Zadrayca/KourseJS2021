// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('btn1').onclick = function () {
    let i11 = document.forms.f1.i11.value;
    let i12 = document.forms.f1.i12.value;
    let i21 = document.forms.f2.i21.value;
    let i22 = document.forms.f2.i22.value;
    console.log(i11, i12, i21, i22);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms.tabCreator;
form.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form.rows.value;
    let columns = +form.columns.value;
    let content = form.content.value;

    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badWords = ['Barlog', 'Saruman', 'Sauron', 'Orc', 'Goblin'];

let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    let bad = document.getElementById('bad').value;
    for (let badWord of badWords) {
        if (badWord === bad) {
            alert('You shall not pass!')
        }
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    let bad = document.getElementById('bad2').value;
    for (let badWord of badWords) {
        if (bad.includes(badWord)) {
            alert('You shall not pass!')
        }
    }
}
