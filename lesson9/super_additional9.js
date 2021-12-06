let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let newUsers = [];
users.forEach(user => {
    newUsers.push(user.address);
})

console.log(newUsers);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

users.forEach(user => {
    let userDiv = document.createElement('div');
    let text = '';
    for (let key in user) {
        if (key === 'address') {
            for (let key2 in user[key]) {
                // console.log(user.address[key2]);
                text += `${key2}: ${user.address[key2]}\n`;
            }
        } else {
            text += `${key}: ${user[key]}\n`;
        }
    }
    userDiv.innerText = text;
    document.body.appendChild(userDiv);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////////////////////////////////////////
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

users.forEach(user => {
    let userDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.innerText = 'name: ' + user.name;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = 'age: ' + user.age;
    let statusDiv = document.createElement('div');
    statusDiv.innerText = 'status: ' + user.status;
    let addressDiv = document.createElement('div');

    let addres = '';
    for (let key in user) {
        if (key === 'address') {
            for (let key2 in user[key]) {
                addres += `${key2}: ${user.address[key2]}\n`;
            }
        }
        addressDiv.innerText = addres;
    }
    userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv)
    document.body.appendChild(userDiv);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////////////////////////////////////////
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

users.forEach(user => {
    let userDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.innerText = 'name: ' + user.name;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = 'age: ' + user.age;
    let statusDiv = document.createElement('div');
    statusDiv.innerText = 'status: ' + user.status;
    let addressDiv = document.createElement('div');

    let cityDiv = document.createElement('div');
    let countryDiv = document.createElement('div');
    let streetDiv = document.createElement('div');
    let houseNumberDiv = document.createElement('div');

    cityDiv.innerText = 'city: ' + user.address.city;
    countryDiv.innerText = 'country: ' + user.address.country;
    streetDiv.innerText = 'street: ' + user.address.street;
    houseNumberDiv.innerText = 'houseNumber: ' + user.address.houseNumber;

    addressDiv.append(cityDiv, countryDiv, streetDiv, houseNumberDiv);

    userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv)
    document.body.appendChild(userDiv);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));                                     //Второй вариант
//////////////////////////////////////////////////////////////////////////////////////////////////////


users.forEach(user => {
    let userDiv = document.createElement('div');
    let infoDiv = document.createElement('div');
    let addressDiv = document.createElement('div');
    let address2Div = document.createElement('div');
    let clone = document.createElement('div');
    for (let key in user) {
        if (key === 'address') {
            for (let key2 in user[key]) {
                address2Div = clone.cloneNode(true);
                address2Div.innerText = `${key2}: ${user.address[key2]}`;
                addressDiv.appendChild(address2Div);
            }
        } else {
            infoDiv = clone.cloneNode();
            infoDiv.innerText = `${key}: ${user[key]}`;
        }
        userDiv.append(infoDiv, addressDiv)
    }
    document.body.appendChild(userDiv);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////////////////////////////////////////
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let contentDiv = document.getElementById('content');
let ulDiv = document.createElement('ul');
let liCloneDiv = document.createElement('li');
let liDiv = document.createElement('li');

let allH2 = document.getElementsByTagName('h2');
for (const item of allH2) {
    liDiv = liCloneDiv.cloneNode(true);
    liDiv.innerText = item.innerText;
    ulDiv.appendChild(liDiv);
    contentDiv.appendChild(ulDiv);
}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

let wrapDiv = document.createElement('div');
rules.forEach(item => {
    let fatherDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = item.title;
    p.innerText = item.body;
    fatherDiv.append(h2, p);
    wrapDiv.appendChild(fatherDiv)
})
document.body.appendChild(wrapDiv);
