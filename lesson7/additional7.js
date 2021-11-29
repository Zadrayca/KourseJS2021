// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class Client {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }

        }
        this.phone = phone;
        this.website = website;
        this.company = {
            companyname: companyname,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}

let client = new Client(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(client);


//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Teg {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, title1fAttr, action1fAttr, title2fAttr, action2fAttr) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {
                titleOfAttr: titleOfAttr,
                actionOfAttr: actionOfAttr
            },
            {
                title1fAttr: title1fAttr,
                action1fAttr: action1fAttr
            },
            {
                title2fAttr: title2fAttr,
                action2fAttr: action2fAttr
            }

        ]
    }
}

let a = new Teg('area', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'coords',
    'Устанавливает координаты активной области.', 'download', 'Предлагает скачать указанный по ссылке файл.');

console.log(a);

let div = new Teg('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');

console.log(div);

let h1 = new Teg('заголовок', 'тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
    'align', 'Определяет выравнивание заголовка.');

console.log(h1);

let span = new Teg('span', 'Тег <span> предназначен для определения строчных элементов документа.',
    'универсальные атрибуты', 'Для этого тега доступны универсальные атрибуты и события.');

console.log(span);

let input = new Teg('Input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
    'accesskey', 'Переход к элементу с помощью комбинации клавиш.',
    'align', 'Определяет выравнивание изображения.');

console.log(input);

let form = new Teg('form', 'Тег <form> устанавливает форму на веб-странице.',
    'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.',
    'action', 'Адрес программы или документа, который обрабатывает данные формы.',
    'autocomplete', 'Включает автозаполнение полей формы.');

console.log(form);

let option = new Teg('Option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    'disabled', 'Заблокировать для доступа элемент списка.',
    'label', 'Указание метки пункта списка.',
    'selected', 'Заранее устанавливает определенный пункт списка выделенным.');

console.log(option);

let select = new Teg('Select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
    'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.',
    'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.',
    'disabled', 'Блокирует доступ и изменение элемента.');

console.log(select);