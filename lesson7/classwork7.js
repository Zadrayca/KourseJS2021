// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    this.info = function () {
        console.log(`model - ${this.model}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('Turer', 'oldsmobile', 1233, 300, 1.8);
console.log(car);
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2021);
let driver1 = {id: 32, qwqw: 'dsfsdf', eee: '12ddd'};
car.addDriver(driver1);
console.log(car);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Carr {
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.speed} на годину`);
        }
        this.info = function () {
            console.log(`model - ${this.model}`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.speed += newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

let car2 = new Carr('Turer', 'oldsmobile', 1233, 300, 1.8);
console.log(car2);
car2.info();
car2.increaseMaxSpeed(50);
car2.changeYear(2021);
driver2 = {id: 32, qwqw: 'dsfsdf', eee: '12ddd'};
car2.addDriver(driver2);
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, leg) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }
}

let cinderella = [cinderella1 = new Cinderella('Cinderella1', 20, 35),
    cinderella2 = new Cinderella('Cinderella2', 18, 37),
    cinderella3 = new Cinderella('Cinderella3', 22, 44),
    cinderella4 = new Cinderella('Cinderella4', 15, 33),
    cinderella5 = new Cinderella('Cinderella5', 45, 38),
    cinderella6 = new Cinderella('Cinderella6', 32, 40),
    cinderella7 = new Cinderella('Cinderella7', 19, 36),
    cinderella8 = new Cinderella('Cinderella8', 21, 45),
    cinderella9 = new Cinderella('Cinderella9', 63, 32),
    cinderella10 = new Cinderella('Cinderella10', 18, 39),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, heels) {
        this.name = name;
        this.age = age;
        this.heels = heels;
    }
}

let prince = new Prince('Prince', '23', 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let item of cinderella) {
    if (prince.heels === item.leg) {
        console.log('Принц знайшов попелюшку - ' + item.name);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let fcinderella = cinderella.find((a) => (prince.heels === a.leg));
console.log('Принц знайшов попелюшку - ' + fcinderella.name);