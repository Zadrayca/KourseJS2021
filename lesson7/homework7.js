//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [user1 = new User(1, 'vova', 'vovka', 'sadsda@gmail.com', 80958876692),
    user2 = new User(22, 'kolya', 'pupkin', 'ffdsjsdfsdf@gmail.com', 80996654512),
    user3 = new User(3, 'vasya', 'kupkin', 'dfsdf3werew@gmail.com', 807753214589),
    user4 = new User(4, 'petya', 'pokupkin', 'qwasdqweq@i.ua', 80667985513),
    user5 = new User(15, 'olya', 'petrenko', 'asdwdascx@i.ua', 80557534599),
    user6 = new User(6, 'katya', 'pitenko', 'zxczxcasd@gmail.com', 80667981566),
    user7 = new User(43, 'raisa', 'bulbenko', 'adsrewsd@i.ua', 80447855566),
    user8 = new User(8, 'regina', 'drozdenko', 'wfdfwerw@gmail.com', 80774589865),
    user9 = new User(78, 'alevtina', 'asafeva', 'sdfwefsxcwe@i.ua', 80778551225),
    user10 = new User(10, 'konstsntin', 'avramenko', 'safdewrqwd@i.ua', 80334875599)
]

console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter((a) => a.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [client1 = new Client(1, 'vova', 'vovka', 'sadsda@gmail.com', 80958876692, ['sdads', 'wqeqw']),
    client2 = new Client(22, 'kolya', 'pupkin', 'ffdsjsdfsdf@gmail.com', 80996654512, ['sdads', 'zxcxf', 'sdfsfds', 'sdfwef']),
    client3 = new Client(3, 'vasya', 'kupkin', 'dfsdf3werew@gmail.com', 807753214589, ['qweqwe', 'sdfsfds', 'sdfwef']),
    client4 = new Client(4, 'petya', 'pokupkin', 'qwasdqweq@i.ua', 80667985513, ['qweqwe', 'sdfsfds', 'sdfwef', 'qwe', 'werwer']),
    client5 = new Client(15, 'olya', 'petrenko', 'asdwdascx@i.ua', 80557534599, ['qweqwe', 'sdfsfds', 'sdfwef', 'qwe', 'werwer']),
    client6 = new Client(6, 'katya', 'pitenko', 'zxczxcasd@gmail.com', 80667981566, ['qweqwe']),
    client7 = new Client(43, 'raisa', 'bulbenko', 'adsrewsd@i.ua', 80447855566, ['qweqwe', 'qweqwe', 'sdfsfds', 'sdfwef', 'qwe', 'werwer']),
    client8 = new Client(8, 'regina', 'drozdenko', 'wfdfwerw@gmail.com', 80774589865, ['qweqwe', 'qweqwe', 'sdfsfds', 'sdfwef']),
    client9 = new Client(78, 'alevtina', 'asafeva', 'sdfwefsxcwe@i.ua', 80778551225, ['qweqwe', 'qweqwe', 'sdfsfds', 'sdfwef', 'sdfwef', 'qwe', 'werwer']),
    client10 = new Client(10, 'konstsntin', 'avramenko', 'safdewrqwd@i.ua', 80334875599, ['qweqwe', 'sdfwef', 'qwe', 'werwer'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length));