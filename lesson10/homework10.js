// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let btn1 = document.getElementById('btn1');
let hideDiv = document.getElementById('text');
hideDiv.innerText = 'i am hide div';
hideDiv.style.width = '100px';
hideDiv.style.background = 'silver';

btn1.onclick = function () {
    hideDiv.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.getElementById('btn2');

btn2.onclick = function () {
    this.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.checkout_age;
form.onsubmit = function (e) {
    e.preventDefault();
    if (+this.age.value < 18) {
        alert('Error!');
    } else {
        alert('OK');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle('collapse');
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]

comments.forEach(item => {
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let tittleH2 = document.createElement('h2');
    tittleH2.innerText = item.title;
    let bodyDiv = document.createElement('div');
    bodyDiv.innerText = item.body;
    bodyDiv.classList.add('body-comment');
    let btn = document.createElement('button');
    btn.innerText = 'hide comment body';

    btn.onclick = function () {
        bodyDiv.classList.toggle('hide-body');
    }


    commentDiv.append(tittleH2, bodyDiv, btn);
    document.body.appendChild(commentDiv);
})