// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arrFunc = [];
let newDiv = document.getElementsByTagName('div');
let index = 0;
let lenClass = 0;
getNameFunc = function () {
    for (const item of newDiv) {
        if (item.classList.item(index) !== null && arrFunc.includes(item.classList.item(index)) === false) {
            arrFunc.push(item.classList.item(index));
            if (lenClass <= item.classList.length){
                lenClass = item.classList.length;
            }
        }
    }
    index++;
    if(index < lenClass){
        return getNameFunc()
    }
}

getNameFunc()

console.log(arrFunc);