let td = document.querySelectorAll('td');
let numArr = [];
function  createBoard() {
    for (const iterator of td) {
        iterator.innerHTML = 0;
        numArr.push(iterator);
    }
    getRandomText();
    getRandomText();
}
createBoard();

function getRandomText() {
    let min = Math.ceil(0);
    let max = Math.floor(15);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (td[random].innerHTML == 0) {
        td[random].innerHTML = 2;
    }
}

